import React, {useEffect, useState} from 'react';
import './App.css';
import Album from "./pages/Album";
import * as types from './components/Constants'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Item from "./pages/Item";

const App = () => {

    const [page, setPage] = useState(1)
    const [fetchedData, setFetchedData] = useState([])
    const [isFetched, setIsFetched] = useState(false)
    const [genre, setGenre] = useState(["28"])
    const [sortType, setSortType] = useState(types.SORT_BY_DATE_UP)
    const [likedMovies, setLikedMovies] = useState([]);
    const [isLiked, setIsliked] = useState(false)


    const handleFetch = (sortOption = sortType, genreOption = genre, pageOption = page) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=4237669ebd35e8010beee2f55fd45546&language=en-US&sort_by=${sortOption}&include_adult=false&include_video=false&page=${pageOption}&with_genres=${[...genreOption]}`, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(json => setFetchedData(json))
            .catch(reason => console.log(reason))
    }
    useEffect(() => {
        handleFetch()
    }, [])

    useEffect(() => {
        if (fetchedData.length !== 0) {
            setIsFetched(true)
        }
    }, [fetchedData])

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/(movies)?">
                        {isFetched ? <Album
                                data={!isLiked ? fetchedData.results : likedMovies}
                                setGenre={setGenre}
                                setSortType={setSortType}
                                genre={genre}
                                page={page}
                                sortType={sortType}
                                handleFetch={handleFetch}
                                setPage={setPage}
                                totalPages={fetchedData.total_pages}
                                setLike={setLikedMovies}
                                likedMovies={likedMovies}
                                isLiked={isLiked}
                                setIsliked={setIsliked}
                            />
                            : <h1>Loading</h1>}
                    </Route>
                    <Route path={'/movies/:itemId'}>
                        <Item data={fetchedData.results}/>
                    </Route>
                    <Redirect to={'/'}/>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

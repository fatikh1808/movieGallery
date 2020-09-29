import React from 'react';
import Footer from "../components/Footer";
import TopBar from "../components/AppBar";
import MainContentAlbum from "../components/MainContentAlbum";

export default function Album(props: any) {

    const {
        data,
        setGenre,
        setSortType,
        handleFetch,
        genre,
        sortType,
        page,
        setPage,
        totalPages,
        setLike,
        likedMovies,
        isLiked,
        setIsliked
    } = props;

    return (
        <React.Fragment>
            <TopBar/>
            {data.length > 0 ? <MainContentAlbum data={data}
                                                 setGenre={setGenre}
                                                 setSortType={setSortType}
                                                 handleFetch={handleFetch}
                                                 genre={genre}
                                                 page={page}
                                                 sortType={sortType}
                                                 setPage={setPage}
                                                 totalPages={totalPages}
                                                 setLike={setLike}
                                                 likedMovies={likedMovies}
                                                 isLiked={isLiked}
                                                 setIsliked={setIsliked}
            /> : <h1>You havent liked any movies</h1>}
            <Footer/>
        </React.Fragment>
    );
}


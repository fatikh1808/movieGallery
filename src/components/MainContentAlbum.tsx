import React from "react";
import AlbumTitle from "./AlbumTitle";
import AlbumItems from "./AlbumItems";
import PageChangeButtons from "./PageChangeButtons";

const MainContentAlbum = (props: any) => {

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
        <main>
            <AlbumTitle
                setGenre={setGenre}
                setSortType={setSortType}
                handleFetch={handleFetch}
                genre={genre}
                page={page}
                sortType={sortType}
                isLiked={isLiked}
                setIsliked={setIsliked}/>
            <AlbumItems
                sortedArray={data}
                setLike={setLike}
                likedMovies={likedMovies}
                isLiked={isLiked}/>
            <PageChangeButtons
                page={page}
                setPage={setPage}
                handleFetch={handleFetch}
                genre={genre}
                sortType={sortType}
                totalPages={totalPages}/>
        </main>
    )
}

export default MainContentAlbum
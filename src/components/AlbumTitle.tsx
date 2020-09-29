import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import {useStyles} from "./styles";
import SortButton from "./SortButton";
import GenreButton from "./GenreButton";
import Button from '@material-ui/core/Button';

const AlbumTitle = (props: any) => {

    const {setGenre, setSortType, handleFetch, genre, sortType, page, isLiked, setIsliked} = props;
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <div className={classes.heroButtons}>
                    {!isLiked ?
                        <Grid container spacing={2} justify="center">
                            <Grid item>
                                <Button variant="contained" color="secondary" onClick={() => {
                                    setIsliked(true)
                                }}>
                                    LikedMovies
                                </Button>
                            </Grid>
                            <Grid item>
                                <SortButton setSortType={setSortType}
                                            handleFetch={handleFetch}
                                            genre={genre}
                                            page={page}
                                />
                            </Grid>
                            <Grid item>
                                <GenreButton setGenre={setGenre}
                                             handleFetch={handleFetch}
                                             page={page}
                                             sortType={sortType}/>
                            </Grid>
                        </Grid> :
                        <Button variant="contained" color="secondary" onClick={() => {
                            setIsliked(false)
                        }}>
                            Gallery
                        </Button>}


                </div>
            </Container>
        </div>
    )
}

export default AlbumTitle;
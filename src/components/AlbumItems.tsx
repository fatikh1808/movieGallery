import {useStyles} from "./styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useHistory} from "react-router-dom";

const AlbumItems = (props: any) => {

    const classes = useStyles();
    const {sortedArray, setLike, likedMovies, isLiked} = props;
    let history = useHistory();

    const handleClick = (label: string) => {
        history.push(`/movies/${label}`);
    }

    const handleLike = (card: any) => {
        let handleOption = likedMovies.filter((item: any) => card.id === item.id).length
        if (handleOption === 0) {
            setLike((likedMovies: any) => [...likedMovies, card])
        }
    }

    const handleDelete = (card: any) => {
        let handleOption = likedMovies.filter((item: any) => card.id !== item.id)
        setLike(handleOption)
    }

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {sortedArray.map((card: any) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={'http://image.tmdb.org/t/p/original/' + card.poster_path}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {card.original_title}
                                </Typography>
                                <Accordion elevation={0}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon/>}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.headingAccordion}>Overview</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {card.overview}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Typography variant="button" display="block" gutterBottom>
                                    {card.vote_average}//{card.release_date}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => {
                                    handleClick(card.id)
                                }}>
                                    View
                                </Button>
                                {!isLiked ?
                                    <Button size="small" color="primary"
                                            onClick={() => handleLike(card)}>
                                        Like
                                    </Button> :
                                    <Button size="small" color="secondary"
                                            onClick={() => handleDelete(card)}>
                                        Delete
                                    </Button>}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default AlbumItems;

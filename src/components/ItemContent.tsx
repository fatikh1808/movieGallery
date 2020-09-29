import React from "react";
import {useStyles} from "./styles";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

const ItemContent = (props: any) => {

    const {ItemInfo} = props;
    const classes = useStyles();

    const poster = (item: any) => {
        if (item.poster_path) {
            return 'http://image.tmdb.org/t/p/original/' + item.poster_path
        } else if (item.backdrop_path) {
            return 'http://image.tmdb.org/t/p/original/' + item.backdrop_path
        } else {
            return "https://wallpapercave.com/wp/wp2749834.jpg"
        }
    }

    return (
        <React.Fragment>
            {
                ItemInfo.map((item: any) => (
                    <Card className={classes.rootItem} key={item.id}>
                        <CardHeader
                            title={item.original_title}
                            subheader={item.release_date}
                        />
                        <CardMedia
                            className={classes.mediaItem}
                            image={poster(item)}
                            title="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {item.overview}
                            </Typography>
                            <Typography variant="h3" color="textSecondary" component="p">
                                {item.vote_average}
                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </React.Fragment>
    )
}

export default ItemContent


import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import {GENRES} from './Constants';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
        },
    }),
);

const GenreButton = (props: any) => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(['']);
    const {setGenre, handleFetch, page, sortType} = props;


    const handleToggle = (value: any) => () => {
        const currentIndex = checked.indexOf(value.id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value.id);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setGenre(newChecked);
        setChecked(newChecked);
        handleFetch(sortType, newChecked, page);
    };

    return (
        <List className={classes.root}>
            {GENRES.map((value: any) => {
                const labelId = `checkbox-list-label-${value.name}`;

                return (
                    <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value.id) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{'aria-labelledby': labelId}}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value.name}/>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default GenreButton;
import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        },
    }),
);

const PageChangeButtons = (props: any) => {

    const {page, setPage, genre, sortType, handleFetch, totalPages} = props;
    const classes = useStyles();
    const [isLeft, setIsLeft] = useState(false)
    const [isRight, setIsRight] = useState(false)


    let pageNumber: number = page;

    useEffect(() => {
        if (page === 1) {
            setIsLeft(true)
        }
    }, [page])

    const handlePageChange = (label: string) => {
        const leftOption: string = 'left';
        const rightOption: typeof leftOption = 'right';

        switch (label) {
            case (leftOption):
                if (pageNumber !== 1) {
                    setIsRight(false)
                    pageNumber = pageNumber - 1
                } else {
                    setIsLeft(true)
                }
                break;
            case rightOption:
                if (pageNumber !== 500) {
                    setIsLeft(false)
                    pageNumber = pageNumber + 1
                } else {
                    setIsRight(true)
                }
                break;
        }
        setPage(pageNumber)
        handleFetch(sortType, genre, pageNumber)
    }

    return (
        <div className={classes.root}>
            <Fab color="secondary"
                 onClick={() => {
                     handlePageChange('left')
                 }}
                 disabled={isLeft}>
                <ChevronLeftIcon/>
            </Fab>
            <Typography variant="body1" gutterBottom>
                {pageNumber} - {totalPages}
            </Typography>
            <Fab color="secondary"
                 onClick={() => {
                     handlePageChange('right')
                 }}
                 disabled={isRight}>
                <ChevronRightIcon/>
            </Fab>
        </div>
    )
}

export default PageChangeButtons;

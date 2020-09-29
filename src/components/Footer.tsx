import Typography from "@material-ui/core/Typography";
import React from "react";
import {useStyles} from "./styles";

const Footer = () => {

    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                mr.fotih@mail.ru
            </Typography>
        </footer>
    )
}
export default Footer;
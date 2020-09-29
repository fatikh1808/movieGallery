import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from '@material-ui/core/AppBar';

const TopBar = (props: any) => {
    return (
        <React.Fragment>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar/>
            </AppBar>
        </React.Fragment>
    )
}

export default TopBar
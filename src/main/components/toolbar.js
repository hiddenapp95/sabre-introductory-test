import React from 'react';
import {AppBar,Typography,Toolbar} from '@material-ui/core';
import strings from "../../localization/strings";

const CustomToolbar = () =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit">
                {strings.toolbarTitle}
            </Typography>
        </Toolbar>
    </AppBar>;

export default CustomToolbar;
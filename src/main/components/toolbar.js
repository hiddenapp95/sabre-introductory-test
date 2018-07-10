import React from 'react';
import {AppBar,Typography,Toolbar,IconButton} from '@material-ui/core';
import SyncIcon from "@material-ui/icons/Sync";
import strings from "../../localization/strings";

const styles = {
    iconStyle:{color:"white"},
    titleStyle:{flex:1,color:"white"}
};

const CustomToolbar = ({handleButtonClick}) =>
    <AppBar position="static" id={"appBar"}>
        <Toolbar>
            <Typography variant="title" color="inherit" style={styles.titleStyle}>
                {strings.toolbarTitle}
            </Typography>
            <IconButton id={"refresh-button"} style={styles.iconStyle} onClick={handleButtonClick}>
                <SyncIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>;

export default CustomToolbar;
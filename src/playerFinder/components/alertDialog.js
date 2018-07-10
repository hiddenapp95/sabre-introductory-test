import React from 'react'
import {DialogTitle,DialogContentText,DialogContent,DialogActions,Dialog,Button} from '@material-ui/core';
import strings from "../../localization/strings";

const AlertDialog = ({ open, error, handleClose }) =>
    <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
    >
        <DialogTitle id="alert-dialog-title">
            {strings.alertDialogTitle}
        </DialogTitle>
        <DialogContent>
            <DialogContentText className="alert-dialog-description">
                {strings.alertDialogMessageInit + (error? (" ["+error.message+"], "):" ")  + strings.alertDialogMessageEnd}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button className={"closeDialogButton"} onClick={handleClose} color="primary" autoFocus>
                {strings.ok}
            </Button>
        </DialogActions>
    </Dialog>;

export default AlertDialog;
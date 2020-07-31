import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const About = () => {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div id="about">
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                打开提示窗
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"关于"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        个人网站<a href="http://www.deertong3.com" target="">deertong3.com</a>，脚手架使用的是metarial ui 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default About
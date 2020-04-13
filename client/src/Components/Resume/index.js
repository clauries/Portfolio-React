import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';

// FUTURE DEVELOPMENT
// =============================================
// Open Resume upon load
// Resume originally located on Experience page
    // This page may become non-esistent if I reinvent the experience page

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        margin: '0 15%',
        marginTop: theme.spacing(2),

    },

}));

function Resume() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h2">
                Resume
            </Typography>
            <div className={classes.container} id="resume">
                <div className={classes.container}>
                    <Button startIcon={<PictureAsPdfIcon/>} href="./assets/imgs/schroeder-resume.pdf" target="_blank" color="primary" variant="contained" className={classes.resumeLink}>
                        Resume
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Resume;
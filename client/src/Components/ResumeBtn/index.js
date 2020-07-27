import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
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

function ResumeBtn() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <div className={classes.container}>
                    <Button startIcon={<PictureAsPdfIcon/>} href="./assets/imgs/schroeder-resume.pdf" target="_blank" color="primary" variant="contained" className={classes.resumeLink}>
                        Download
                    </Button>
                </div>
        </div>
    );
};

export default ResumeBtn;
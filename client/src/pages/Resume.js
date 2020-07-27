import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import ResumeBtn from "../Components/ResumeBtn";

// FUTURE DEVELOPMENT
// =============================================
// Resume available on the page
// Add Resume options: 
    // Simple
    // Design
    // CV

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
            <ResumeBtn/>
        </div>
    );
};

export default Resume;
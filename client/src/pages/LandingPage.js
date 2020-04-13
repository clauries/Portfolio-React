import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

// FUTURE DEVELOPMENT
// =============================================
// Choose other font
// Interactive particle animation (own component?)
// Animation during transition to About Page

const useStyles = makeStyles(theme => ({
  exploreBtn: {
    marginTop: theme.spacing(2),
  },

}));

function LandingPage() {
  const classes = useStyles();

  return (
    <div className="Landing Page" >
      <div class="container">
        <div class="landing-text">
          <Typography variant="h1">
            LAURIE
              <div class="lastName">
              SCHROEDER
              </div>
          </Typography>
          <Typography variant="h4">
            Fullstack Web Developer
          </Typography>
          <Button className={classes.exploreBtn} variant="contained" color="primary" href="/about">
            Explore Site
          </Button>
        </div>
      </div>

    </div>
  );

};

export default LandingPage;
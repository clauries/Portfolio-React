import React from "react";
import { Button, Typography } from '@material-ui/core';

// FUTURE DEVELOPMENT
// =============================================
// Choose other font
// Button below fullstack developer
// Interactive particle animation (own component?)
// Opaque card behind name to make stand out
// Button to about page
// Animation during transition to About Page

function LandingPage() {

    return (
      <div className="Landing Page" >
        <div class="container">
            <div class="landing-text">
                <Typography variant="h1">LAURIE <div class="lastName">SCHROEDER</div>
                </Typography>
                <Typography variant="h5">Fullstack Web Developer</Typography>
            </div>
            <Button>Explore Site</Button>
        </div>
      </div>
    );

};

export default LandingPage;
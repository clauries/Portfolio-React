import React from "react";
import { Button } from '@material-ui/core';


function LandingPage() {

    return (
      <div className="Landing Page" >
        <div class="container">
            <div class="landing-text">
                <h1>LAURIE <div class="lastName">SCHROEDER</div>
                </h1>
                <h6>Fullstack Web Developer</h6>
            </div>
            <Button>Explore Site</Button>
        </div>
      </div>
    );

};

export default LandingPage;
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

// FUTURE DEVELOPMENT
// =============================================
// Formatting - particularly image sizes
// Carousel of projects at top
// Links to coding sites like Github & codepen (when I have a few up and running)
// List all major repos 
// Card with image of app
    // OnHover -> Flip animation
    // Back of card is project info, repo, deployed webpage
    // Buttons for view app & view repo
    // May need to upgrade heroku to host more apps


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
    Button: {
        
    }
    
  },
}));

function Portfolio() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        
        <section className="portfolio" id="portfolio">
            <div className="container">
                <div className="section-heading">
                    <h1>Portfolio</h1>
                    <h6>View some of my recent work</h6>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-img has-margin-right">
                        <img 
                        src="./assets/imgs/gluten-tootin-logo.png" 
                        alt="Gluten Tootin Logo" 
                        id="gluten-tootin"
                        data-aos="fade-right" 
                        data-aos-delay="300" 
                        />
                    </div>
                    <div className="portfolio-description" data-aos="fade-left" data-aos-delay="600">
                        <h6>JS & API Application</h6>
                        <h1>GLUTEN TOOTIN</h1>
                        <p>
                            An app dedicated to searching for gluten-free recipes and restaurants, making it easy for
                            those with the diet restriction to search for food that fits their diet needs, so that they
                            won’t eat food that is potentially harmful.
                        </p>
                        <a href="https://adamwheeler81.github.io/project1/" target="_blank" className="cta">View App</a>
                        <a href="https://github.com/adamwheeler81/project1" target="_blank" className="cta">View Repo</a>
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-description has-margin-right" data-aos="fade-right" data-aos-delay="600">
                        <h6>Fullstack Application</h6>
                        <h1>STAR GAZER</h1>
                        <p>
                            Node based app that allows users to log in and view information about different
                            constellations. Particularly useful for educating children without the intrusion of adds or
                            unfortunate google searches.
                        </p>
                        <a href="https://limitless-atoll-63723.herokuapp.com/ " target="_blank" className="cta">View App</a>
                        <a href="https://github.com/alpinelife37/Project-2" target="_blank" className="cta">View Repo</a>
                    </div>
                    <div className="portfolio-img" data-aos="fade-left" data-aos-delay="300">
                        <img 
                        src="./assets/imgs/star-gazer.png" 
                        alt="star-gazer app" 
                        id="star-gazer" 
                        />
                    </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-img has-margin-right">
                        <img 
                        src="./assets/imgs/weather-dashboard.png" 
                        alt="Coding Quiz Image" 
                        id="weather-dashboard"
                        data-aos="fade-right" 
                        data-aos-delay="300" 
                        />
                    </div>
                    <div className="portfolio-description" data-aos="fade-left" data-aos-delay="600">
                        <h6>JS & API Application</h6>
                        <h1>WEATHER DASHBOARD</h1>
                        <p>
                            This app exists to help people look at weather forecasts in various cities using a weather
                            API.
                        </p>
                        <a href="https://clauries.github.io/WeatherDashboard/" target="_blank" className="cta">View App</a>
                        <a href="https://github.com/clauries/WeatherDashboard" target="_blank" className="cta">View Repo</a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );

};

export default Portfolio;
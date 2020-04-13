import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProjectCard from '../Components/ProjectCard';

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
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap', 
        justifyContent: 'center',       
        margin: '0 12%',
    },

}));

function Portfolio() {
    const classes = useStyles();

    const projects = [
        {
            name: 'Gluten-Tootin',
            alt: 'Gluten Tootin Logo',
            description: 'An app dedicated to searching for gluten-free recipes and restaurants, making it easy for those with the diet restriction to search for food that fits their diet needs, so that they won’t eat food that is potentially harmful.',
            deployedLink: 'https://adamwheeler81.github.io/project1/',
            repoLink: 'https://github.com/adamwheeler81/project1',
            image: './assets/imgs/gluten-tootin-logo.png'
        },
        {
            name: 'Star Gazer',
            alt: 'Star Gazer Search Page',
            description: 'Node based app that allows users to log in and view information about different constellations. Particularly useful for educating children without the intrusion of adds or unfortunate google searches.',
            deployedLink: 'https://limitless-atoll-63723.herokuapp.com/',
            repoLink: 'https://github.com/alpinelife37/Project-2',
            image: './assets/imgs/star-gazer.png'
        },   
        {
            name: 'Bookey',
            alt: 'Bookey Search Page',
            description: 'As a reader, I want to search Google Books for quality book information so that I can quickly find books to read and know where to purchase them.',
            deployedLink: 'https://arcane-tor-79262.herokuapp.com',
            repoLink: 'https://github.com/clauries/Bookey',
            image: './assets/imgs/bookey.png'
        },
        {
            name: 'Employee Directory',
            alt: 'Employee Directory Home Page',
            description: 'As a user, I want to be able to view my entire employee directory at once so that I have quick access to my team\'s information.',
            deployedLink: 'https://github.com/clauries/employee-directory',
            repoLink: 'https://pure-journey-91812.herokuapp.com/',
            image: './assets/imgs/employee-directory.png'
        },
        {
            name: 'Note Taker',
            alt: 'Note Taker Interface',
            description: 'As a user, I want to be able to write and save notes I want to be able to delete notes I\'ve written before so that I can organize my thoughts and keep track of tasks I need to complete',
            deployedLink: 'https://github.com/clauries/Note-Taker',
            repoLink: 'https://evening-ocean-95695.herokuapp.com/',
            image: './assets/imgs/notetaker.png'
        },
        {
            name: 'Weather Dashboard',
            alt: 'Weather Dashboard Interface',
            description: 'This app exists to help people look at weather forecasts in various cities using a weather API.',
            deployedLink: 'https://clauries.github.io/WeatherDashboard/',
            repoLink: 'https://github.com/clauries/WeatherDashboard',
            image: './assets/imgs/weather-dashboard.png'
        }
    ]

    return (
        <div className={classes.root}>
            {projects.map(project => {
                    return (
                        <ProjectCard
                            name={project.name}
                            alt={project.alt}
                            description={project.description}
                            deployedLink={project.deployedLink}
                            repoLink={project.repoLink}
                            image={project.image}
                        />
                    )

                })}
        </div>
    );
};

export default Portfolio;
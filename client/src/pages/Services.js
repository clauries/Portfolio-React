import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// FUTURE DEVELOPMENT
// =============================================
// Verify all skills learned in bootcamp are listed
// Lessen spacing between p's

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        width: '100%',
        marginTop: theme.spacing(2),
    }

}));

function Services() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section class="services" id="services">
                <Typography variant="h2">
                    Services & Skills
                </Typography>
                <div className={classes.container}>
                    <div class="my-skills">
                        <div class="skill" data-aos="fade-in" data-aos-delay="300">
                            <div class="icon-container">
                                <i class="fas fa-laptop-code"></i>
                            </div>
                            <h1>Front-End</h1>
                            <p>
                                Developing user-friendly interfaces
                            </p>
                            <p>
                                Trained in: HTML, CSS, JavaScript, jQuery, Bootstrap, API Integration, Mobile-first Design,
                                Flexbox, Grid, AOS, Materialize, React
                            </p>
                        </div>
                        <div class="skill" data-aos="fade-in" data-aos-delay="600">
                            <div class="icon-container">
                                <i class="fas fa-server"></i>
                            </div>
                            <h1>Back-end</h1>
                            <p>
                                Developing efficient servers and databases
                            </p>
                            <p>
                                Trained in: Node, npm modules, OOP, Express, MySQL, MongoDB, IndexedDB
                            </p>
                        </div>
                        <div class="skill" data-aos="fade-in" data-aos-delay="900">
                            <div class="icon-container">
                                <i class="fas fa-layer-group"></i>
                            </div>
                            <h1>Fullstack</h1>
                            <p>
                                Developing apps & web pages from beginning to end
                            </p>
                            <p>
                                Trained in: Test-driven Development, MVC, CRUD, Git, Agile
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
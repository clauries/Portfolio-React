import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// FUTURE DEVELOPMENT
// =============================================
// Update image
// Layout - image to side
// Carosel of images?
// Continue to revise details

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        // display: 'flex',
        // flexDirection: 'row',
        margin: '0 15%',
        marginTop: theme.spacing(2),
    }
}));

function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <section className="about" id="about">
                <Typography variant="h2">
                    About Myself
                </Typography>
                <div className={classes.container}>
                    <div className="profile-img" data-aos="fade-right" data-aos-delay="300">
                        <img src="assets/imgs/Laurie.Schroeder.png" alt="Profile Image" />
                    </div>
                    <div className="about-details" data-aos="fade-left" data-aos-delay="600">
                        <p>
                            Hi! I'm Laurie, a full stack developer with a background in emotional intelligence and
                            psychology.
                        </p>
                        <p>
                            Recently I underwent a career change and in April I will be certified as a Full Stack Web
                            Developer from the University of Oregon’s Coding Bootcamp. In the past, a natural desire for
                            order, efficiency, and accuracy drove me to work in detail-oriented environments. As a
                            multi-passionate, studious explorer of information, I'm always searching for opportunities to
                            not only learn but apply new knowledge. Development uses many of my best traits to provide
                            services to others. Software and web development is a world filled with never-ending learning
                            opportunities grounded in the need to use new skills. So I am making a career out of it; using
                            my education and past experience to compliment this new venture.
                        </p>
                        <p>
                            With an Bachelor's of Science in counseling, I have a passion for helping individuals,
                            families, and teams utilize developmental tools for growth. Technology already plays a crucial
                            role in our lives, providing countless opportunities for progress right in the palms of people's
                            hands. My dream is to partner with companies and organizations to create better tools for
                            personal and team development. I'm excited to apply my understanding of psychology to
                            create more effective applications and interfaces for users – ultimately bridging emotional
                            intelligence and tech development.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
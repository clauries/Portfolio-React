import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { TextField, TextareaAutosize, Button, Card, CardContent, Grid } from '@material-ui/core';

// FUTURE DEVELOPMENT
// =============================================
// Button logic
// Email compatibility using Send Grid
    // https://app.sendgrid.com/login?redirect_to=%2Fguide%3Ffrom%3Dprofile%26integrate%3Dtrue
    // https://github.com/sendgrid/sendgrid-nodejs/tree/master/packages/mail
    // https://github.com/sendgrid/sendgrid-nodejs
// Centering icons
// Spacing
// Button on the left, not centered

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        marginBottom: theme.spacing(1),
      },
      Button: {
          
      }

    },
  }));

function Contact() {
    const classes = useStyles();

    return (
        <section class="contact" id="contact">
            <div class="container">
                <div class="section-heading" id="contact-heading">
                    <h1>Contact</h1>
                    <h6>Let's Work Together</h6>
                </div>
                <div class="social-media" action="" data-aos="fade-up" data-aos-delay="300">
                    <ul class="nav-list">
                        <li>
                            <a href="https://github.com/clauries" class="icon-link" target="_blank">
                                <i class="fab fa-github-square"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/laurie-schroeder" class="icon-link" target="_blank">
                                <i class="fab fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <br />
            <Card>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <CardContent>
                <form className={classes.root} noValidation method="post" enctype="text/plain" data-aos="fade-up" data-aos-delay="300">
                    <p id="instructions">Leave me a quick note below or email me directly: laurie@laurieschroeder.net</p>
                    <br />
                    <TextField id="name" label="What is your name?" color="primary" variant="outlined" fullWidth required/>
                    <TextField id="email" label="What is your e-mail?" color="primary" variant="outlined" fullWidth required/>
                    <TextField id="message" label="Message" multiline rows="6" variant="outlined" fullWidth required />
                    <Grid item alignItems="flex-start">
                    <Button variant="contained" color="primary">Send Message</Button> 
                    </Grid>
                </form>
                </CardContent>
                </Grid>
            </Card>
            </div>
        </section>
    );

};

export default Contact;
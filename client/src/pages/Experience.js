import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginBottom: theme.spacing(1),
    },
    Button: {
        
    }
    
  },
}));

function Experience() {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-heading">
                    <h1>Work Experience</h1>
                    <h6>Past and Current Jobs</h6>
                </div>
                <div className="timeline" data-aos="fade-down" data-aos-delay="400">
                    <ul>
                        <li className="date" data-date="2019 - Present">
                            <h1>U of O Coding Bootcamp</h1>
                            <p>
                                24-week fullstack software development bootcamp
                            </p>
                        </li>
                        <li className="date" data-date="2018 - 2019">
                            <h1>Insurance Verification, Providence St Joseph Health</h1>
                            <p>
                                Communicated with providers and insurances to verify scheduled and ER hospitalizations
                                were covered.
                            </p>
                        </li>
                        <li className="date" data-date="2017 - 2018">
                            <h1>Pre-registration Specialist, Providence St Joseph Health</h1>
                            <p>
                                Collected patient billing and demographic data over the phone to ensure PSJH received
                                proper insurance reimbursement for services while creating an environment where
                                the patient feels safe and appreciated.
                            </p>
                        </li>
                        <li className="date" data-date="2015 - 2017">
                            <h1>Library Clerk, Boise Bible College</h1>
                            <p>
                                Managed daily library and computer lab upkeep, graded routine assignments for
                                professors, and oversaw small team of student workers.
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="resume">
                    <a href="./assets/imgs/schroeder-resume.pdf" target="_blank" class="resume-link">
                        <i className="far fa-file-pdf" id="pdf"></i>
                        Resume
                    </a>
                </div>
            </div>
        </section>
      </div>
    );

};

export default Experience;
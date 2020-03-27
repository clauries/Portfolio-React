import React from "react";

function Contact() {

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

                <form method="post" enctype="text/plain" data-aos="fade-up" data-aos-delay="300">
                    <p>Leave me a quick note below or email me directly: laurie@laurieschroeder.net</p>
                    <br />
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name..." required />
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" placeholder="Enter your email..." required />
                    <label for="services">Services:</label>
                    <select name="services" id="services">
                        <option value="">Front-End</option>
                        <option value="">Back-end</option>
                        <option value="">Fullstack</option>
                        <option value="">Other</option>
                    </select>
                    <label for="message">Message:</label>
                    <textarea name="message" id="message" cols="10" rows="10" required></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </section>
    );

};

export default Contact;
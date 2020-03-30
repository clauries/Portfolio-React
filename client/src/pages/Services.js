import React from "react";


function Services() {

    return (
      <div >
        <section class="services" id="services">
            <div class="container">
                <div class="section-heading">
                    <h1>Services</h1>
                    <h6>What I can do for you</h6>
                </div>
                <div class="my-skills">
                    <div class="skill" data-aos="fade-in" data-aos-delay="300">
                        <div class="icon-container">
                            <i class="fas fa-laptop-code"></i>
                        </div>
                        <h1>Front-End</h1>
                        <p>
                            Developing user-friendly interfaces
                        </p>
                        <br />
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
                        <br />
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
                        <br />
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
import React from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  image  from './moi.jpg';

const About = () => {
    return (
        <section id="about"
            className="container text-center">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="profile-image-container">

                        <h2 className="section-title">
                            <h2 className="section-title">
                                <img src={image} className="img-fluid"></img>
                                className="d-block mx-auto mb-2 text-primary" size="3x" />
                            </h2>
                        </h2>
                    </div>
                    <p className="section-description mt-4">
I'm a full stack developer that is passionate about coding and technology.
I'm seeking for a challenging position to leverage my technical skills and contribute to innovative projects. 
My objective is to make a scalable and easy-to-maintain applications and services.<br/> 
Team work ✓<br/>
Fast learner ✓<br/>
Motivated ✓<br/>
                    </p>
                </div>
            </div>
        </section>
    );
};
export default About;
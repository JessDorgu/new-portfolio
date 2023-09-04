import React from "react";
import "./styles/about.css";
import Headshot from "./images/headshot.svg";

function AboutMe() {
    return(
        <div className="about-me">
            <div className="about-img">
            <img src={Headshot} alt="headshot" className="image"/>
            </div>
            <div className="content">
                <h2>Jessica Dorgu</h2>
                <p>"Hello, I'm Jessica, a budding junior developer with a background in brand management. My passion for coding emerged from a love for problem-solving and design. Proficient in HTML, CSS, and JavaScript, I'm eager to turn ideas into functional web solutions. Join me on this coding journey as I bring creativity and a strong foundation in project management to the tech world. Let's build together!"</p>
            </div>
        </div>
    );
}

export default AboutMe;


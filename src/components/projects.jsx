import React from "react";
import "./projects.css";
import SC from "./images/1.svg";
import DocHub from "./images/2.svg";
import ArtSquare from "./images/3.svg";

function Projects(){
    return(
        <div className="project-circles">

           <a href="https://dinh282.github.io/sports-companion/" ><img src={SC} alt="Sports Companion App" /></a>
           <a href="https://dochub78-78fe2203b787.herokuapp.com/"><img src={DocHub} alt="DocHub App" /></a>
           <a href="https://art-square-fd6773213118.herokuapp.com/"><img src={ArtSquare} alt="ArtSquare App" /></a>
        </div>
    );
}

export default Projects;
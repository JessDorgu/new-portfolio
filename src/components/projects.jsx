import React from "react";
import "./styles/projects.css";
import SC from "./images/1.svg";
import DocHub from "./images/2.svg";
import ArtSquare from "./images/3.svg";
import JS from "./images/quiz.svg";
import Regex from "./images/regex.svg";
import Original from "./images/original.svg";

function Projects(){
    return(
        <div className="project-circles">

           <a href="https://dinh282.github.io/sports-companion/" ><img src={SC} alt="Sports Companion App" /></a>
           <a href="https://dochub78-78fe2203b787.herokuapp.com/"><img src={DocHub} alt="DocHub App" /></a>
           <a href="https://art-square-fd6773213118.herokuapp.com/"><img src={ArtSquare} alt="ArtSquare App" /></a>
           <a href="https://jessdorgu.github.io/Quiz/" ><img src={JS} alt="JavaScript Quiz" /></a>
           <a href="https://dochub78-78fe2203b787.herokuapp.com/"><img src={Regex} alt="Hex Value Regex" /></a>
           <a href="https://gist.github.com/JessDorgu/f37663fe64287a2245fa602aea04f701"><img src={Original} alt="First Website" /></a>
        </div>
    );
}

export default Projects;
import React from "react";
import "./styles/resume.css";
import Dbutton from "./images/download.svg";
import ResumeDoc from "./images/resume.pdf";

function Resume(){
    const documentPath = ResumeDoc;

    return (

        <div className="resume-container">
            <a href={documentPath} download="resume.pdf" className="download-link">
          <img src={Dbutton}  className="downloader"/> 
        </a>
        <div className="pdf-viewer">
          <embed src={documentPath} type="application/pdf" width="100%" height="600px" />
        </div>
        
      </div>

    );

}

export default Resume;
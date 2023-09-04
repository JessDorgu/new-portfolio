import React from "react";
import "./styles/footer.css";
import GitLink from "./images/git.svg";
import LinkedIn from "./images/link.svg";
// import EmailLink from "./images/mail.svg";

function Footer(){
    return(
<div className="footer">
<div className="footer-links">

<a href="https://github.com/JessDorgu" ><img src={GitLink} alt="GitHub link" className="footimg"/></a>
<a href="http://linkedin.com/in/jessica-dorgu-33850b83"><img src={LinkedIn} alt="LinkedIn Profile" className="footimg"/></a>
{/* <a href="jdorgu011@gmail.com"><img src={EmailLink} alt="gmail" /></a> */}

</div>
</div>
    );
}

export default Footer;
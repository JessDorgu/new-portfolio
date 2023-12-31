import React, { useState } from 'react';
import './styles/header.css'; 
import logo from './images/logo.svg';
import MainContent from './main'; 


function Header() {
  const [activeSection, setActiveSection] = useState(null); 

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo" />
        <div className="header-links">
          <button onClick={() => handleButtonClick('about')}>About</button>
          <button onClick={() => handleButtonClick('projects')}>Projects</button>
          <button onClick={() => handleButtonClick('contact')}>Contact</button>
          <button onClick={() => handleButtonClick('resume')}>Resume</button>
        </div>
      </header>
      <MainContent activeSection={activeSection} />
    </div>
  );
}

export default Header;



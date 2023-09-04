import React, { useState } from 'react';
import './header.css'; // Import the CSS for the Header component
import logo from './logo.svg'; // Import the SVG file

function Header() {
  const [activeSection, setActiveSection] = useState(''); // State to track which section is active

  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <div className="header-links">
        <button onClick={() => setActiveSection('about')}>About</button>
        <button onClick={() => setActiveSection('projects')}>Projects</button>
        <button onClick={() => setActiveSection('contact')}>Contact</button>
      </div>
    </div>
  );
}

export default Header;


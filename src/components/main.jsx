import React from 'react';
import './main.css';
import About from './about'; 
import Projects from './projects'; 
import Contact from './contact'; 

function MainContent({ activeSection }) {
  return (
    <div className="main-content">
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
    </div>
  );
}

export default MainContent;

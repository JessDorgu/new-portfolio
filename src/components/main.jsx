import React from 'react';
import './styles/main.css';
import About from './about'; 
import Projects from './projects'; 
import Contact from './contact'; 
import Resume from './resume'; 

function MainContent({ activeSection }) {
  return (
    <div className="main-content">
      {activeSection === 'about' && <About />}
      {activeSection === 'projects' && <Projects />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'resume' && <Resume />}

    </div>
  );
}

export default MainContent;

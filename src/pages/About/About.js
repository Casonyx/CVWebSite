import React from 'react';

import './About.scss';


function About() {
  return (
    <div className="about">
      <div className="about__content">
        <h2 className="about__title">ABOUT ME</h2>
        <p className="about__text">
          Hi! I’m a frontend developer. 
          I study and work with HTML, CSS, 
          SCSS, JavaScript and React  using BEM, DRY, KISS and YAGNI. 
          My purpose is to work in a team, to impove my knowledge of development. 
          I have a freelance experience. 
          I believe that a human is capable of anything!
        </p>
        <a href="https://docs.google.com/document/d/1EhDMAPhElGAP4kdFq6ssi_X93OjCHXE_kq2STGbhgz0/edit" className="about__btn">RESUME</a>
      </div>
      <div className="about__photo"></div>
    </div>
  )
}

export default About;
import React from 'react';

import Header from '../../components/Header/Header';

import './Skills.scss';

export default function Skills() {
  return (
    <div className="app">
      <Header />
      <div className="skills">
        <ul className="skills__list">   
          <li>
            <h4 className="skills__title">Development skills</h4>
            HTML, PUG, CSS, SCSS, LESS, SASS, JavaScript, React, jQuery, Webpack.
          </li>  
          <li>
            <h4 className="skills__title">Team skills</h4>
            <span>Git, Kaiten, BEM.</span>
            KISS, DRY, YAGNI. 
            <span>Clean, semantic, responsive and cross browser layout.</span>
          </li>   
          <li>
            <h4 className="skills__title">Others</h4>
            Figma, Photoshop, Sketch,
            Python and Django.
          </li>  
          <li>
            <h4 className="skills__title">Jobs</h4>
            <span>30.10.2021 - 07.04.2022 -- Layout Engineer</span>
            <span>04.2020 - 02.2021 -- Freelance Layout Engineer</span>
          </li>  
        </ul>
      </div>
    </div>
  )
}

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="header__text">Bogdan Shulgin</div>
      <ul className="header__navbar">
      <li className="header__link">
          <NavLink 
            exact="true"
            to="/" 
            className="header__nav"
            activeclassname="active"
            >
              About
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink 
            to="/skills" 
            className="header__nav"
            activeclassname="active"
            >
              Skills
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink 
            to="/projects" 
            className="header__nav"
            activeclassname="active"
            >
              Projects
          </NavLink>
        </li>
        <li className="header__link">
          <NavLink 
            to="/contacts" 
            className="header__nav"
            activeclassname="active"
            >
              Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

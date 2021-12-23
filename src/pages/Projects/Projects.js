import React from 'react';

import Header from '../../components/Header/Header';

import './Projects.scss';

export default function Projects() {
  return (
    <div className="app">
      <Header />
      <div className="projects">
        <div className="projects__recent">
          <h3 className="projects__title">Recent Projects</h3>
          <ul className="projects__list">
            <li><a href="https://casonyx.github.io/CatsShop/" className="projects__link">Cats Shop</a></li>
            <li><a href="https://casonyx.github.io/LandingBryanskBusiness/" className="projects__link">Order Business</a></li>
            <li><a href="https://casonyx.github.io/LandingBusiness/" className="projects__link">Business</a></li>
          </ul>
        </div>
        <div className="projects__old">
        <h3 className="projects__title">Old Projects</h3>
          <ul className="projects__list">
            <li><a href="hhttps://casonyx.github.io/mountains/" className="projects__link">Travel</a></li>
            <li><a href="https://casonyx.github.io/Axure/" className="projects__link">Axure</a></li>
            <li><a href="https://casonyx.github.io/Platforms/" className="projects__link">Platforms</a></li>
            <li><a href="https://casonyx.github.io/Taxi/" className="projects__link">Taxi</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

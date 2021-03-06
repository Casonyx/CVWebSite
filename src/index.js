import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Contacts from './pages/Contacts/Contacts';
import About from './pages/About/About';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={ <App /> }/>
        <Route path="/" element={ <About /> }/>
        <Route path="skills" element={ <Skills /> }/>
        <Route path="projects" element={ <Projects /> }/>
        <Route path="contacts" element={ <Contacts /> }/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

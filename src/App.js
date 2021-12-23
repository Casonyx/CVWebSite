import React from "react";  

import './App.scss';

import About from './pages/About';
import Header from './components/Header';

function App() {

  return (
    <div className="app">
      <Header />
      <About />
    </div>
  );
}

export default App;




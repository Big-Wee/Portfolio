import React from 'react';
import  Home  from './components/Home.js';
import Project from './components/Project.js';
import Footer from './components/Footer.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

 

function App() {

  return (
    <div className="App">
      <Home /> 
      <Project />
      <Footer/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import {Route, Link, Router} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      
      <NavBar />

      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      
      <Footer />

    </div>
  );
}

export default App;

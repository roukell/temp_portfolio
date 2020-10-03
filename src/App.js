import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/HomePage';
import Navbar from './components/Navbars';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
  
  return (
    <Router>
      <Navbar className='stickyNavbar' />
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <HomePage />
            <Project />
          </Route>
          <Route path="/project">
            <HomePage />
            <Project />
          </Route>
        </Switch>
      <Footer />
    </ Router>
  )
}

export default App;

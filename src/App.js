import React from 'react';
import HomePage from './components/HomePage';
import Navbars from './components/Navbars';
import About from './components/About';
import Resume from './components/Resume';

const App = () => {
  
  return (
    <>
      <Navbars className='stickyNavbar' />
      <HomePage />
      <About />
      <Resume />
    </>
  )
}

export default App;

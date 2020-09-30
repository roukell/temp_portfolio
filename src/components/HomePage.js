import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import Navbars from './Navbars';

const HomePage = () => {

  return (
    <>
      <Jumbotron fluid >
        <Navbars />
        <Container fluid className='jumbotronContainer'>
          <div className='jumbotronDiv'>
            <h1>Melody Lo</h1>
            <p>
              I am a full stack web developer mainly using React.
            </p>
          </div>
        </Container>
      </Jumbotron>
    </>

  )
}

export default HomePage;

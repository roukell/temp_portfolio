import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';

const About = () => (
    <>
        <Container fluid className='aboutContainer'>
            <div className='aboutDiv'>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src="holder.js/171x180" roundedCircle />
                        <p>My photo</p>
                    </Col>

                    <Col xs={8}>
                        <h3>About me</h3>
                        <p>
                            I am a full stack web developer mainly using React.
                    </p>
                        <p>
                            type more here
                    </p>
                    </Col>
                </Row>
            </div>
        </Container>
    </>

);

export default About;

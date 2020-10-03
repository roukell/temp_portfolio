import React from 'react';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import movieManagerImg from '../img/movie_manager.png';

function Project() {

    return (
        <div className='projectDiv'>
            <h1 className='projectTitle'>Projects</h1>

            <CardDeck className="justify-content-md-center">

                <Row xs={1} md={2} >
                    <Col>
                        <Card border="light" className='projectCard'>
                            <Card.Img variant="top" src={movieManagerImg} />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    put project here
                    </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light" className='projectCard'>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Type here
                        </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                         
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light" className='projectCard'>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    put project here
                    </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light" className='projectCard'>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Project 1</Card.Title>
                                <Card.Text>
                                    put project here
                    </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </CardDeck>

            <p className='projectTitle'></p>

        </div>
    );
};

export default Project;
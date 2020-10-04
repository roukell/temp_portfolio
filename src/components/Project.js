import React from 'react';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import movieManagerImg from '../img/movie_manager.png';
import vBloggerImg from '../img/v_bloggers_around_you.png';
import burgerLoggerImg from '../img/burger_logger.png';
import weatherDashImg from '../img/weather_dashboard_logo.png';

function Project() {

    return (
        <div className='projectDiv'>
            <h1 className='projectTitle'>Projects</h1>

            <CardDeck className="justify-content-md-center">
                <Row xs={1} md={3} >
                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={movieManagerImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Group Project 2</Card.Title>
                                <Card.Text>
                                    put project here
                    </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={vBloggerImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Group Project 1</Card.Title>
                                <Card.Text>
                                    Type here
                        </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                         
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={burgerLoggerImg} className='projectImg'/>
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

            <br/>

            <CardDeck className="justify-content-md-center">
                <Row xs={1} md={3} >
                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={weatherDashImg} className='projectImg'/>
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
                        <Card border="light">
                            <Card.Img variant="top" src={vBloggerImg} className='projectImg'/>
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
                        <Card border="light">
                            <Card.Img variant="top" src={movieManagerImg} className='projectImg'/>
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
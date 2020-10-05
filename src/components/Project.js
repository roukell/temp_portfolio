import React from 'react';
import { CardDeck, Card, Row, Col } from 'react-bootstrap';
import movieManagerImg from '../img/movie_manager_screenshot.png';
import vBloggerImg from '../img/v_bloggers_screenshot.png';
import employeeDirectoryImg from '../img/employee_directory_screenshot.png';
import burgerLoggerImg from '../img/burger_logger.png';
import weatherDashImg from '../img/weather_dash_board_screenshot.png';
import onlnieQuizImg from '../img/online_quiz_screenshot.png'


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
                                <Card.Title>Want to Watch Movie Manager</Card.Title>
                                <Card.Text>
                                Want to Watch Movie Manager is a website which allows users to search movies available in the market and keep track of them.
                    </Card.Text>
                                <Card.Link href="https://github.com/roukell/Want-to-Watch-Series-Manager" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://damp-dusk-40026.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={vBloggerImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>V-Bloggers Around You</Card.Title>
                                <Card.Text>
                                Find v-bloggers around your local area to help promoting your business
                        </Card.Text>
                                <Card.Link href="https://github.com/roukell/vbloggers_around_you" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://roukell.github.io/vbloggers_around_you/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={employeeDirectoryImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Employee Directory</Card.Title>
                                <Card.Text>
                                Employee Directory assists employers to view their entire employee directory at once and provides quick access to employee information.
                    </Card.Text>
                                <Card.Link href="https://github.com/roukell/employee_directory" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://roukell.github.io/employee_directory/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
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
                            <Card.Img variant="top" src={burgerLoggerImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Burger Logger</Card.Title>
                                <Card.Text>
                                Burger Logger is a restaurant app that allow users to enter their favourite burger name.
                    </Card.Text>
                    <Card.Link href="https://github.com/roukell/burger_logger" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://serene-hamlet-38122.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
                            </Card.Body>
                           
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={weatherDashImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Weather Dashboard</Card.Title>
                                <Card.Text>
                                This is a weather dashboard including forecast for the day and the future 5 days.
                        </Card.Text>
                        <Card.Link href="https://github.com/roukell/weather_dashboard" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://roukell.github.io/weather_dashboard/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
                            </Card.Body>
                         
                        </Card>
                    </Col>

                    <Col>
                        <Card border="light">
                            <Card.Img variant="top" src={onlnieQuizImg} className='projectImg'/>
                            <Card.Body>
                                <Card.Title>Online Quiz</Card.Title>
                                <Card.Text>
                                Test your HTML, CSS, Javascript knowledge
                    </Card.Text>
                    <Card.Link href="https://github.com/roukell/online_quiz" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                                <Card.Link href="https://roukell.github.io/online_quiz/" target="_blank" rel="noopener noreferrer">Deployed Application</Card.Link>
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
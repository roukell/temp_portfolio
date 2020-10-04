import React, { useState } from 'react';
import { Container, Col, Row, Carousel, Card } from 'react-bootstrap';

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect} className='carouselContainer'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className='aboutContainer'>
            <Row>
            <Col></Col>
            <Col xs={12}>
 <Card>
     <Card.Body>
                            <h3>Learn more about Melody</h3>
                            <p>
                                Melody is a Full Stack Web Developer experience in designing and developing web applications by using React. She always pay high attention to detail and have created several functional websites with her proven problem solving skills.
<br />
                                <br />
She has strong time management skills with the ability to prioritise workload in order to meet strict deadlines. Melody is also experienced in communicating and maintaining relationships with key internal and external stakeholders.
<br />
                                <br />
She is highly motivated to develop interactive websites that enhances the user experience by providing a clean, simple and intuitive interface. Melody has recently developed an application to solve employee directory problems.
<br />
                                <br />
Her goal to develop creative and functional website experiences for people, utilising latest technologies and innovative problem solving mindset.
                            </p>
                            <br />
                            <ul class="list-inline dev-icons">
                            <li class="list-inline-item">
                            <a href="https://github.com/roukell" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/nolan/64/github.png" alt='github'/></a>
                            </li>
                            <li class="list-inline-item">
                            <a href="https://www.linkedin.com/in/yilingmelodylo/" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/linkedin.png" alt='linkedin'/></a>
                            </li>
                            <li class="list-inline-item">
                            <a href="mailto:yiling.melody.lo@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/cute-clipart/64/000000/email.png" alt='email'/></a>
                            </li>       
                            </ul>

                            <section class="resume-section" id="skills">
                                <div class="resume-section-content">
                                    <h3 class="subheading mb-3">Programming Languages & Tools</h3>
                                    <ul class="list-inline dev-icons">
                                        <li class="list-inline-item">
                                            <img src="https://img.icons8.com/color/48/000000/html-5.png" alt='html5'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/css3.png" alt='css3'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/javascript.png" alt='javascript'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/jquery.png" alt='jquery'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/react-native.png" alt='react'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt='nodejs'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt='bootstrap'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/npm.png" alt='npm'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt='mysql'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt='mongodb'/></li>
                                        <li class="list-inline-item"><img src="https://img.icons8.com/nolan/64/api-settings.png" alt='api'/></li>

                                    </ul>
            
                                    <ul class="fa-ul mb-0">
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                        Mobile-First, Responsive Design
                    </li>
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Browser Testing & Debugging
                    </li>
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                        Cross Functional Teams
                    </li>
                                        <li>
                                            <span class="fa-li"><i class="fas fa-check"></i></span>
                        Relational and Non-relational Database
                    </li>
                                    </ul>
                                </div>
                            </section>
            </Card.Body>
</Card>
</Col>
<Col></Col>
</Row>
</Container>
        </div>
    )
};

export default About;

import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const Resume = () => (
    <>
        <Container fluid className='resumeContainer'>
            <div className='resumeDiv'>
                <Row>
                    <Col xs={6} md={4}>
                        Education
                </Col>
                    <Col xs={12} md={8}>
                        Univerity of Sydney
                        bootcamp
                </Col>
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={12} md={8}>
                        Univerity of Sydney
                </Col>
                </Row>

                <Row>
                    <Col xs={6} md={4}>
                        Skills
                </Col>
                    <Col xs={12} md={8}>
                        xs=12 md=8
                </Col>
                </Row>
            </div>
        </Container>
    </>
);

export default Resume;

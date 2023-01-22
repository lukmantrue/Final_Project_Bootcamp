import React from "react";
import Navbar from '../../components/Navbar';
import { Container, Row, Col } from "react-bootstrap";
const About = () => {
    return(
        <>
            <Navbar/>
            <Container>
                <Row style={{minHeight:'70vh'}} className="align-items-center">
                    <Col className="text-center">
                    <h2>This is page About</h2>
                    </Col>
                </Row>
            </Container>
            
        </>
    )
}

export default About;
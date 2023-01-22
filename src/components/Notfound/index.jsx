import React from "react";

import { Container, Row, Col } from "react-bootstrap";


export const NotFound = () => {
    return(
        <>
            <Container>
                <Row style={{minHeight:'100vh', alignItems:'center'}}>
                    <Col className="text-center">
                        <h3>Page Not Found</h3>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
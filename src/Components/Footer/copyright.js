import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap/esm";
import { Container } from "react-bootstrap/";

export default function copyright() {
  return (
    <>
      <section>
        <Container fluid>
          <Row className="align-items-center justify-content-center">
            <Col className="bg-white w-100 text-center text-dark py-3">
              <div className="fw-normal" style={{ fontSize: "16px" }}>
                Copyright by Lukman Budiman
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

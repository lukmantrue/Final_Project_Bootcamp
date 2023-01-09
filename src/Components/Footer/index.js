import React from "react";
import { Col, Container, Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import NavLink from "react-bootstrap/NavLink";
import Copyright from "./copyright";

export default function index() {
  return (
    <>
      <section
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Container className="">
          <Row lg={4} md={4} sm={2} className="d-flex justify-content-center ">
            <Col lg={4} md={6} sm={12} className="">
              <div className="">
                <div className="py-3">
                  <img src="/logo192.png" style={{ width: "50px" }} />
                </div>
                <p style={{textAlign:'justify'}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </Col>
            <Col lg={8} md={6} sm={12} className="">
              <Row className="justify-content-sm-start justify-content-lg-center">
                <Col lg={3} md={6} sm={6}  className="">
                  <div className="">
                    <div>
                      <p className="fs-5 py-3">Program</p>
                    </div>
                    <NavLink className="footer_content">Online Course</NavLink>
                    <NavLink className="footer_content">Mini Bootcamp</NavLink>
                    <NavLink className="footer_content">Bootcamp</NavLink>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={6}>
                  <div className="">
                    <div>
                      <p className="fs-5 py-3">Program</p>
                    </div>
                    <NavLink className="footer_content">Online Course</NavLink>
                    <NavLink className="footer_content">Mini Bootcamp</NavLink>
                    <NavLink className="footer_content">Bootcamp</NavLink>
                  </div>
                </Col>
                <Col lg={3} md={6} sm={12} className="">
                  <div className="">
                    <div>
                      <p className="fs-5 py-3">Program</p>
                    </div>
                    <NavLink className="footer_content">Online Course</NavLink>
                    <NavLink className="footer_content">Mini Bootcamp</NavLink>
                    <NavLink className="footer_content">Bootcamp</NavLink>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <Copyright />
    </>
  );
}

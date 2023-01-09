import React from "react";
import { Col, Container, Nav } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import NavLink from "react-bootstrap/NavLink";

export default function index() {
  return (
    <>
      <section className="" style={{ bottom: "0", left: "0" }}>
        <Container fluid>
          <Row className="vh-100 px-4">
            <Col>
              <div className="">
                <div className="py-4">
                    <img src="/logo192.png" style={{width:'80px'}}/>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </Col>
            <Col>
              <div className="">
                <div>
                    <p className="fs-5 py-4">Program</p>
                </div>
                <NavLink>
                    Online Course
                </NavLink>
                <NavLink>
                    Mini Bootcamp
                </NavLink>
                <NavLink>
                    Bootcamp
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="">
                <div>
                    <p className="fs-5 py-4">Program</p>
                </div>
                <NavLink>
                    Online Course
                </NavLink>
                <NavLink>
                    Mini Bootcamp
                </NavLink>
                <NavLink>
                    Bootcamp
                </NavLink>
              </div>
            </Col>
            <Col>
              <div className="">
                <div>
                    <p className="fs-5 py-4">Program</p>
                </div>
                <NavLink>
                    Online Course
                </NavLink>
                <NavLink>
                    Mini Bootcamp
                </NavLink>
                <NavLink>
                    Bootcamp
                </NavLink>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="bg-white text-center">
              <p className="fw-normal" style={{ fontSize: "16px" }}>
                Copyright by Lukman Budiman
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

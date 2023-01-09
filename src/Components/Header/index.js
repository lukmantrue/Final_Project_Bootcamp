import React from "react";
import { NavLink } from "react-bootstrap";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Stack from "react-bootstrap/Stack";

export default function index() {
  return (
    <>
      <Navbar className="navbar py-3" variant="dark" expand="lg">
        <Container className="px-5">
          <Navbar.Brand href="#home">
            <div className="image">
              <img src="/logo192.png" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* <Stack direction="horizontal" gap={3}> */}
              <NavDropdown
                className="padding_nav m-auto mx-5"

                title={
                    <span className="tittle__dropdown">Program</span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                className="padding_nav m-auto mx-5"
                title={
                    <span className="tittle__dropdown">Knowledge Field</span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            <NavLink className="padding_nav m-auto mx-5">
                <span className="tittle__dropdown">
                    About
                </span>
            </NavLink>
              <NavLink href="#link">
                <div className="sign__in">Masuk/Daftar</div>
              </NavLink>
              {/* </Stack> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

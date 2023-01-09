import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function index() {
  return (
    <>
      <section className="main vh-100 d-flex align-items-center">
        <Container className="container">
          <div className="">
            <div className="">
              <div className="col-md-6" style={{ textAlign: "justify" }}>
                <p
                  className=" text-white"
                  style={{ fontSize: "40px", fontWeight: "500" }}
                >
                  Welcome to course
                </p>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="btn__join">Join Now !</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="main__two ">
        <Container className="container">
          <p
            className="text-center py-5"
            style={{ fontSize: "37px", fontWeight: "500" }}
          >
            Why you must choose us
          </p>
          <Row
            xs={1}
            md={1}
            lg={3}
            className=" text-center align-items-start justify-content-center vh-100 h-100  py-5 position-relative"
          >
            {Array.from({ length: 3 }).map((_, idx) => (
              <Col className="position-relative " >
                <div className="cards " >
                  <div className="">
                    <div
                      className="position-absolute"
                      style={{ marginTop: "-30px", top: "0", left: "45%" }}
                    >
                      <img
                        src="/img/presentation.png"
                        className="App-logo"
                        alt="logo"
                        style={{ width: "80px" }}
                      />
                    </div>
                    <p className="title_card pt-3">Lorem One</p>
                    <p className="content__ px-5 pb-4">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s
                    </p>
                  </div>
                </div>
              </Col>
            ))}
            {/* <Col className="position-relative">
                <div className="cards position-absolute">
                  <div
                    className=""
                    style={{ marginTop: "-30px", top: "0", left: "50%" }}
                  >
                    <img
                      src="/img/books.png"
                      className="App-logo"
                      alt="logo"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <p
                    className="title_card pt-3"
                    
                  >
                    Lorem Two
                  </p>
                  <p className="content__ px-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </Col>
              <Col className="position-relative">
                <div className="cards position-absolute ">
                  <div
                    className=""
                    style={{ marginTop: "-30px", top: "0", left: "50%" }}
                  >
                    <img
                      src="/img/certificate.png"
                      className="App-logo"
                      alt="logo"
                      style={{ width: "80px" }}
                    />
                  </div>
                  <p
                    className="title_card pt-3"
                    
                  >
                    Lorem Three
                  </p>
                  <p className="content__ px-5 pb-4">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s
                  </p>
                </div>
              </Col> */}
          </Row>
        </Container>
      </section>
    </>
  );
}

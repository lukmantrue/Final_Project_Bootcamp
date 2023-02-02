import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useEffect } from "react";
import model from "../../assets/Img/model.png";
import { useNavigate } from "react-router-dom";
import { getAll } from "../../store/course/action";

import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  const [state, setState] = useState("");

  // useEffect(() => {
  //   alert("Selamat datang di website kami");
  // }, [state]);

  const { entities } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchProducts = async () => {
    // const response = await httpService.get("/product");
    await dispatch(getAll());

    console.log("response", entities);
  };
  const goToDetail = (prodId) => {
    navigate(`/detail/${prodId}`);
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  function Join() {
    setState(prompt("Input nama anda", state));
  }

  return (
    <>
      <section className="main d-flex align-items-center">
        <Container className="container">
          <Row style={{ minHeight: "90vh" }}>
            <Col
              md={6}
              className="d-flex  text-start align-items-center"
              style={{ minHeight: "70vh" }}
            >
              <div className="">
                <p
                  className=" text-white"
                  style={{ fontSize: "40px", fontWeight: "500" }}
                >
                  Welcome to course {state}
                </p>
                <p className="text-white">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
                <button className="btn__join" onClick={Join}>
                  Join Now !
                </button>
              </div>
            </Col>

            <Col
              className="d-flex align-items-end "
              style={{ minHeight: "70vh" }}
            >
              <div className="d-none d-lg-block">
                <img
                  src={model}
                  alt="picture_model"
                  className=""
                  style={{ width: "34em", height: "30em" }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="main__two min-vh-100 ">
        <Container className="container">
          <p
            className="text-center py-5"
            style={{ fontSize: "20px", fontWeight: "500" }}
          >
            Why you must choose us
          </p>
          <Row
            xs={1}
            md={1}
            lg={3}
            className=" text-center align-items-start justify-content-center py-5 position-relative"
          >
            {entities.map((item) => {
              return (
                <Col
                  onClick={() => goToDetail(item.id)}
                  lg={4}
                  className="position-relative mb-5"
                  style={{ minHeight: "100%", height: "300px" }}
                >
                  <div className="bg-white" style={{ borderRadius: "20px" }}>
                    <div
                      className="position-absolute"
                      style={{ marginTop: "-45px", top: "0", left: "42%" }}
                    >

                    </div>
                    <div
                      className="overflow-hidden"
                      style={{
                        borderTopRightRadius: "20px",
                        borderTopLeftRadius: "20px",
                      }}
                    >
                      <img
                        src={item.image}
                        alt=""
                        style={{
                          width: "100%",
                          minWidth: "100px",
                          maxHeight: "140px",
                          height: "100%",
                        }}
                        className="img-fluid"
                      />
                    </div>
                    <p className="title_card pt-3">{item.title}</p>
                    <p
                      className="content__ px-5 pb-4"
                      style={{ fontSize: "10px" }}
                    >
                      {item.description}
                    </p>
                    <div className="text-end px-3 py-1">
                      <p style={{ fontSize: "12px" }}>${item.price}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
            {/* <Col lg={4} className="position-relative mb-5">
              <div className="bg-white ">
                <div
                  className="position-absolute"
                  style={{ marginTop: "-45px", top: "0", left: "42%" }}
                >
                  <img
                    src="/img/books.png"
                    className="App-logo"
                    alt="logo"
                    style={{ width: "60px" }}
                  />
                </div>
                <p className="title_card pt-3">Lorem One</p>
                <p className="content__ px-5 pb-4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </p>
              </div>
            </Col>
            <Col lg={4} className="position-relative mb-5">
              <div className="bg-white ">
                <div
                  className="position-absolute"
                  style={{ marginTop: "-45px", top: "0", left: "42%" }}
                >
                  <img
                    src="/img/certificate.png"
                    className="App-logo"
                    alt="logo"
                    style={{ width: "60px" }}
                  />
                </div>
                <p className="title_card pt-3">Lorem One</p>
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

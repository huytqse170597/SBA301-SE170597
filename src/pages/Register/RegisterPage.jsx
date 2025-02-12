import React from "react";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import "./RegisterPage.css";
import { FaLock, FaUser, FaEnvelope } from "react-icons/fa";
import { FaRepeat, FaPhoneVolume, FaHouse } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
const RegisterPage = () => {
  return (
    <div className="register-page">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="register-box p-4 rounded-5 px-5">
          <h2 className="text-center text-latte mb-4">Register</h2>
          <Form action="#" method="POST">
            <Row>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Username</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaUser className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Email"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaEnvelope className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaLock className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="password"
                      placeholder="Repeat Password"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaRepeat className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
              </div>
              <div className="col-md-6">
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <IoPerson className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <IoPerson className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Phone"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaPhoneVolume className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3">
                  {/* <Form.Label className="text-latte">Password</Form.Label> */}
                  <div className="position-relative">
                    <Form.Control
                      type="text"
                      placeholder="Address"
                      className="bg-transparent text-latte border-black rounded-5"
                    />
                    <FaHouse className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                  </div>
                </Form.Group>
              </div>
            </Row>
            <Row className="mb-3">
              <Col className="text-end">
                <a
                  href="#forgot-password"
                  className="text-latte-500 text-decoration-none"
                >
                  Forgot password?
                </a>
              </Col>
            </Row>

            <Button variant="primary" type="submit" className="w-100 mb-3">
              Register
            </Button>

            <p className="text-center text-latte mt-3">
              Already have an account?{" "}
              <a href="/login" className="text-latte-500 text-decoration-none">
                Sign In
              </a>
            </p>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default RegisterPage;

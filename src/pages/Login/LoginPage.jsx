import React from "react";
import { Container, Form, Button, Row, Col, FormCheck } from "react-bootstrap";
import "./LoginPage.css";
import { FaLock, FaUser } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="login-page">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="login-box p-4 rounded-5 px-5">
          <h2 className="text-center text-latte mb-4">Login</h2>
          <Form action="#" method="POST">
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
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-latte border-black rounded-5"
                />
                <FaLock className="position-absolute end-0 top-50 translate-middle-y me-3 text-latte" />
                <i className="fas fa-lock position-absolute end-0 top-50 translate-middle-y me-3 text-latte"></i>
              </div>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <FormCheck
                  type="checkbox"
                  label="Remember me"
                  className="text-latte"
                />
              </Col>
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
              Login
            </Button>

            <p className="text-center text-latte mt-3">
              Don't have an account?{" "}
              <a
                href="#register"
                className="text-latte-500 text-decoration-none"
              >
                Register
              </a>
            </p>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;

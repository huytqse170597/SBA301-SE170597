import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export class Footer extends Component {
  render() {
    return (
      <footer className="bg-dark text-white py-3 fixed-bottom">
        <Container>
          <Row>
            <Col className="text-center">
              <p>&copy; 2024 Home Service Platform. All Rights Reserved.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

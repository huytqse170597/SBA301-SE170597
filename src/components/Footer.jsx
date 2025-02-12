import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Footer.module.css";
export class Footer extends Component {
  render() {
    return (
      <footer className={`${styles.footer} text-bg-light py-3 fixed-bottom`}>
        <Container>
          <Row>
            <Col className="text-center">
              <p>
                &copy; {new Date().getFullYear()} Home Service Platform. All
                Rights Reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;

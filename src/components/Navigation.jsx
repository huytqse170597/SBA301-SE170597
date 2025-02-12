import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Navigation.module.css";
export class Navigation extends Component {
  render() {
    return (
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        fixed="top"
        className={`${styles.navbar}`}
      >
        <Container>
          <Navbar.Brand href="#">Home Service Platform</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/update-profile">Update Profile</Nav.Link>
              <Nav.Link href="/login">Sign In</Nav.Link>
              <Nav.Link href="/register">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Navigation;

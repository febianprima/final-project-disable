import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import styles from "../Css/Header.module.css";

function Header() {
  return (
    <>
      <Navbar className={styles.warnaNav} expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-white">
            Disable
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="text-white me-4" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-white me-4" href="/about">
                About Us
              </Nav.Link>
              <Nav.Link className="text-white" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Button variant="success" className={styles.btnLogin}>
              Login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

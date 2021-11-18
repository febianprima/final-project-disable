import React from "react";
import { Navbar, Container, Form, FormControl, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function HeaderFeed() {
  return (
    <Navbar
      bg="light"
      expand="lg"
      style={{ top: "0", position: "sticky", zIndex: "10" }}
    >
      <Container>
        <Navbar.Brand href="/">Disable</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-5"
              aria-label="Search"
            />
          </Form>
          <Image
            className="ms-auto me-3"
            style={{ width: "20px", height: "20px" }}
            src="../Assets/bag.png"
          />
          <Image
            className="me-3"
            style={{ width: "20px", height: "20px" }}
            src="../Assets/bell.png"
          />
          <Link to="/profile">
            <Image
              style={{ width: "60px", height: "60px" }}
              src="../Assets/Pic1.jpg"
              roundedCircle
            />
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderFeed;

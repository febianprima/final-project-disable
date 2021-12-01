import React from "react";
import { Navbar, Container, Nav, Button, Image } from "react-bootstrap";
import styles from "../Css/Header.module.css";
import { Link } from "react-router-dom";

function Header() {

  const MouseOver = (event)=> {
    event.target.style.color = 'purple';
  }

  const MouseOut = (event) => {
    event.target.style.color = 'whitesmoke'
  }

  const BackgroundOver = (event) => {
    event.target.style.background = 'purple'
  }

  const BackgroundOut = (event) => {
    event.target.style.background = 'green'
  }

  return (
    <>
      <Navbar
        className={styles.warnaNav}
        expand="lg"
        style={{
          top: "0",
          position: "sticky",
          zIndex: "10"
        }}
      >
        <Container>
          <Navbar.Brand href="/final-project-disable" className="text-white">
            <Image
              style={{ width: "15vw" }}
              src={process.env.PUBLIC_URL + "/Assets/logo.png"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                className="me-4"
                href="/final-project-disable"
                style={{color:'whitesmoke',fontWeight:'bold', fontSize:'14pt'}}
                onMouseEnter={MouseOver}
                onMouseLeave = {MouseOut}
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="me-4"
                href="/final-project-disable/about"
                style={{color:'whitesmoke',fontWeight:'bold', fontSize:'14pt'}}
                onMouseEnter={MouseOver}
                onMouseLeave = {MouseOut}
              >
                About
              </Nav.Link>
              <Nav.Link
                className="me-4"
                href="/final-project-disable/contact"
                style={{color:'whitesmoke',fontWeight:'bold', fontSize:'14pt'}}
                onMouseEnter={MouseOver}
                onMouseLeave = {MouseOut}
              >
                Contact
              </Nav.Link>
            </Nav>
            <Link to="/login">
              <Button 
                className={styles.btnLogin}
                onMouseOver={BackgroundOver}
                onMouseLeave={BackgroundOut}
              >
                Login
              </Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

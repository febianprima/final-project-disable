import React from "react";
import { Navbar, Container, Form, FormControl, Image, NavLink, NavDropdown, NavItem, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import styles from "../Css/HeaderFeed.module.css";

function HeaderFeed() {
  let user = JSON.parse(localStorage.getItem('userToken'))
  const navigate = useNavigate();
  const logOut =()=>{
    localStorage.clear();
    navigate('/login')
  }
  return (
    <Navbar
      expand="lg"
      style={{ top: "0", position: "sticky", zIndex: "10", backgroundColor:'#34BE82' }}
    >
      <Container>
        <Navbar.Brand href="/feed">
        <Image style={{width: '40px'}} src="../Assets/icon.png" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex ms-2">
            <CIcon icon={freeSet.cilSearch} style={{width:'22px', color:'black'}} />
              <FormControl
                type="search"
                placeholder="Search"
                className="ms-2 me-5"
                aria-label="Search"
                style={{border:'none', width:'35vw', borderBottomColor:'black'}}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
        <NavLink href='/feed'>
          <Image
            style={{ width: "20px", height: "20px" }}
            src="../Assets/home.png"
            href='/feed'
          />
          
        </NavLink>
        <NavLink href='/contact'>
        <Image
          style={{ width: "25px", height: "25px" }}
          src="../Assets/user.png"
        />
        </NavLink>
        <NavLink href='/job'>
        <Image
          style={{ width: "20px", height: "20px" }}
          src="../Assets/bag.png"
        />
        </NavLink>
        <NavLink href='/notification'>
        <Image
          style={{ width: "20px", height: "20px" }}
          src="../Assets/bell.png"
        />
        </NavLink>
        <NavLink href='/chat'>
        <Image
          className="ms-auto me-3"
          style={{ width: "25px", height: "25px" }}
          src="../Assets/chat.png"
        />
        </NavLink>
        <NavDropdown title={ <Image
            style={{ width: '40px' }}
            className='text-primary my-auto'
            src="../Assets/Pic1.jpg"
            roundedCircle
          />}>
          <NavDropdown.Item href='/profile'>Profil Anda</NavDropdown.Item>
          <NavDropdown.Item>Pengaturan</NavDropdown.Item>
          <NavDropdown.Item onClick={logOut}>Keluar</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default HeaderFeed;

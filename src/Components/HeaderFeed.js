import React from "react";
import { Navbar, Container, Form, FormControl, Image, NavLink, NavDropdown, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

function HeaderFeed() {
  let user = JSON.parse(localStorage.getItem('userData'));
  let id = user.id;
  const navigate = useNavigate();
  const logOut =()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <Navbar
      expand="lg"
      style={{ top: "0", position: "sticky", zIndex: "10", backgroundColor:'#34BE82' }}
    >
      <Container>
        <Navbar.Brand href={`/final-project-disable/feed/${id}`}>
        <Image style={{width: '40px'}} src={process.env.PUBLIC_URL + "/Assets/icon.png"} />
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
        <NavLink href={`/final-project-disable/feed/${id}`}>
          <Image
            style={{ width: "20px", height: "20px" }}
            src={process.env.PUBLIC_URL + "/Assets/home.png"}
            href={`/final-project-disable/feed/${id}`}
          />
          
        </NavLink>
        <NavLink href={`/final-project-disable/connection/${id}`}>
        <Image
          style={{ width: "25px", height: "25px" }}
          src={process.env.PUBLIC_URL + "/Assets/user.png"}
        />
        </NavLink>
        <NavLink href={`/final-project-disable/job/${id}`}>
        <Image
          style={{ width: "20px", height: "20px" }}
          src={process.env.PUBLIC_URL + "/Assets/bag.png"}
        />
        </NavLink>
        <NavLink href={`/final-project-disable/notification/${id}`}>
        <Image
          style={{ width: "20px", height: "20px" }}
          src={process.env.PUBLIC_URL + "/Assets/bell.png"}
        />
        </NavLink>
        <NavLink href={`/final-project-disable/chat/${id}`}>
        <Image
          className="ms-auto me-3"
          style={{ width: "25px", height: "25px" }}
          src={process.env.PUBLIC_URL + "/Assets/chat.png"}
        />
        </NavLink>
        <NavDropdown title={ <Image
            style={{ width: '40px' }}
            className='text-primary my-auto'
            src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
            roundedCircle
          />}>
          <NavDropdown.Item href={`final-project-disable/profile/${id}`}>Profil Anda</NavDropdown.Item>
          <NavDropdown.Item>Pengaturan</NavDropdown.Item>
          <NavDropdown.Item onClick={logOut}>Keluar</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default HeaderFeed;

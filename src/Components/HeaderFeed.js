import React from "react";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  Image,
  NavLink,
  NavDropdown,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { freeSet } from "@coreui/icons";
import CIcon from "@coreui/icons-react";

function HeaderFeed() {
  let user = JSON.parse(localStorage.getItem("userData"));
  let id = user.id;
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Navbar
      expand="lg"
      style={{
        top: "0",
        position: "sticky",
        zIndex: "10",
        backgroundColor: "#34BE82",
      }}
    >
      <Container>
        <Navbar.Brand href={`/final-project-disable/feed/${id}`}>
          <Image
            style={{ width: "40px" }}
            src={process.env.PUBLIC_URL + "/Assets/icon.png"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto"></Nav>
          <NavLink
            className="text-center"
            href={`/final-project-disable/feed/${id}`}
          >
            <Image
              style={{ width: "20px", height: "20px" }}
              src={process.env.PUBLIC_URL + "/Assets/home.png"}
              href={`/final-project-disable/feed/${id}`}
            />
            <p style={{ color: "white" }}>Home</p>
          </NavLink>
          <NavLink
            className="text-center"
            href={`/final-project-disable/connection/${id}`}
          >
            <Image
              style={{ width: "25px", height: "25px" }}
              src={process.env.PUBLIC_URL + "/Assets/user.png"}
            />
            <p style={{ color: "white" }}>Profile</p>
          </NavLink>
          <NavLink className="text-center" href={`/final-project-disable/job`}>
            <Image
              style={{ width: "20px", height: "20px" }}
              src={process.env.PUBLIC_URL + "/Assets/bag.png"}
            />
            <p style={{ color: "white" }}>Jobs</p>
          </NavLink>
          <NavLink
            className="text-center"
            href={`/final-project-disable/chat/${id}`}
          >
            <Image
              className="ms-auto"
              style={{ width: "25px", height: "25px" }}
              src={process.env.PUBLIC_URL + "/Assets/chat.png"}
            />
            <p style={{ color: "white" }}>Chat</p>
          </NavLink>
        </Navbar.Collapse>
        <NavDropdown
          title={
            <Image
              style={{ width: "40px" }}
              className="text-primary my-auto"
              src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
              roundedCircle
            />
          }
        >
          <NavDropdown.Item href={`final-project-disable/profile/${id}`}>
            Profil Anda
          </NavDropdown.Item>
          <NavDropdown.Item>Pengaturan</NavDropdown.Item>
          <NavDropdown.Item onClick={logOut}>Keluar</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default HeaderFeed;

import React from "react";
import {
  Navbar,
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
import Api from "../Utils/Api";
import axios from "axios";

  let user = JSON.parse(localStorage.getItem("userData"));

function HeaderFeed() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  }

  const deleteAccount = async (event) => {
    await axios
      .delete(Api.deleteUser/user.id)
      .then((res) => {
        const result = res.data;
        console.log(result);
        if(res.status === 200){
          navigate('/login');
          event.preventDefault();
          localStorage.clear();
        } else {
          alert(result.message)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Navbar
      expand="lg"
      style={{
        top: "0",
        position: "sticky",
        zIndex: "10",
        backgroundColor: "#34BE82",
        height: "90px"
      }}
    >
        <Navbar.Brand className='ms-4 ps-4' href={`/final-project-disable/feed/${user.id}`}>
          <Image
            style={{ width: "40px" }}
            src={process.env.PUBLIC_URL + "/Assets/icon.png"}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Form className="d-flex">
              <CIcon
                icon={freeSet.cilSearch}
                style={{ width: "22px", color: "black" }}
              />
              <FormControl
                type="search"
                placeholder="Search"
                className="ms-2"
                aria-label="Search"
                style={{
                  border: "none",
                  width: "30vw",
                  borderBottomColor: "black",
                }}
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
        <NavLink
          className="text-center pt-4"
          href={`/final-project-disable/feed/${user.id}`}
        >
          <Image
            style={{ width: "20px" }}
            src={process.env.PUBLIC_URL + "/Assets/home.png"}
            href={`/final-project-disable/feed/${user.id}`}
          />
          <p style={{ color: "white", fontSize: "10pt" }}>Beranda</p>
        </NavLink>
        <NavLink
          className="text-center pt-4"
          href={`/final-project-disable/connection/${user.id}`}
        >
          <Image
            style={{ width: "25px" }}
            src={process.env.PUBLIC_URL + "/Assets/user.png"}
          />
          <p style={{ color: "white", fontSize: "10pt" }}>Koneksi</p>
        </NavLink>
        {/* <NavLink
          className="text-center pt-4 me-2"
          href={`/final-project-disable/job/${user.id}`}
        >
          <Image
            style={{ width: "15px" }}
            src={process.env.PUBLIC_URL + "/Assets/bag.png"}
          />
          <p style={{ color: "white", fontSize: "10pt" }}>Lowongan</p>
        </NavLink> */}
        <NavLink
          className="text-center pt-4"
          href={`/final-project-disable/notification/${user.id}`}
        >
          <Image
            style={{ width: "20px" }}
            src={process.env.PUBLIC_URL + "/Assets/bell.png"}
          />
          <p style={{ color: "white", fontSize: "10pt" }}>Notifikasi</p>
        </NavLink>
        <NavLink
          className="text-center pt-4"
          href={`/final-project-disable/chat/${user.id}`}
        >
          <Image
            style={{ width: "22px" }}
            src={process.env.PUBLIC_URL + "/Assets/chat.png"}
          />
          <p style={{ color: "white", fontSize: "10pt" }}>Chat</p>
        </NavLink>
        <NavLink
          className="text-center"
          href={`/final-project-disable/profile/${user.id}`}
        >
          <Image
            style={{ width: '40px' }}
            className='text-primary mb-1'
            src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
            roundedCircle
          />
        </NavLink>
        <NavDropdown className='me-5 pe-3'>
          <NavDropdown.Item onClick={deleteAccount}>Hapus Akun</NavDropdown.Item>
          <NavDropdown.Item onClick={logOut}>Keluar</NavDropdown.Item>
        </NavDropdown>
    </Navbar>
  );
}

export default HeaderFeed;

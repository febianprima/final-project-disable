import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Image,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";

function Feed() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Disable</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-5"
                aria-label="Search"
              />
            </Form>
            <Image
              className="me-3"
              style={{ width: "20px", height: "20px" }}
              src="../Assets/bag.png"
            />
            <Image
              className="me-3"
              style={{ width: "20px", height: "20px" }}
              src="../Assets/bell.png"
            />
            <Image
              style={{ width: "60px", height: "60px" }}
              src="../Assets/Pic1.jpg"
              roundedCircle
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row className="mt-4">
          <Col lg="3" className="d-flex justify-content-center">
            <Card style={{ width: "18rem", height: "30rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Image
                  style={{ width: "100px", height: "100px" }}
                  variant="top"
                  src="../Assets/Image.jpg"
                  roundedCircle
                />
              </div>
              <Card.Body className="text-center">
                <Card.Title>Muhamad Ajie Darmawan</Card.Title>
                <Card.Text>Kerja Cerdas</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Koneksi Anda <span style={{ float: "right" }}>50</span>
                </ListGroupItem>
                <ListGroupItem>Coba Premium Gratis</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="mb-3">
              <div className="d-flex">
                <Image
                  className="m-1"
                  style={{ width: "60px", height: "60px" }}
                  src="../Assets/Pic1.jpg"
                />
                <Button
                  className="mt-3 mb-3"
                  style={{ borderRadius: "50px", width: "450px" }}
                  size="sm"
                  variant="outline-secondary"
                >
                  <span style={{ float: "left", marginLeft: "10px" }}>
                    Mulai buat postingan
                  </span>
                </Button>
              </div>
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/gallery.png"
                    />
                    <span className="ms-2">Foto</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/multimedia.png"
                    />
                    <span className="ms-2">Video</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/timetable.png"
                    />
                    <span className="ms-2">Acara</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/document.png"
                    />
                    <span className="ms-2">Article</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Card className="mb-5">
              <div className="d-flex">
                <Image
                  className="m-1"
                  style={{ width: "60px", height: "60px" }}
                  src="../Assets/Pic1.jpg"
                />
                <span className="ms-2 mt-4">Muhamad Ajie Darmawan</span>
              </div>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src="../Assets/Image.jpg" />
              <Card.Body>
                <Row>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/like.png"
                    />
                    <span className="ms-2">Like</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/comment.png"
                    />
                    <span className="ms-2">Comment</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/share.png"
                    />
                    <span className="ms-2">Share</span>
                  </Col>
                  <Col className="text-center">
                    <Image
                      style={{ width: "20px", height: "20px" }}
                      src="../Assets/send.png"
                    />
                    <span className="ms-2">Send</span>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" className="d-flex justify-content-center">
            <Card style={{ width: "18rem", height: "30rem" }}>
              <Card.Img variant="top" src="../Assets/Image.jpg" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Feed;

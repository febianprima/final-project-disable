import React from "react";
import { Container, Row, Col, Card, ListGroup, Image } from "react-bootstrap";
import HeaderFeed from "../Components/HeaderFeed";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <HeaderFeed />
      <Container className="mb-5">
        <Row className="mt-5">
          <Col lg="8">
            <Card>
              <Card.Img
                variant="top"
                style={{
                  width: "100%",
                  height: "35vh",
                  objectFit: "cover",
                  objectPosition: "50% 85%",
                }}
                src={process.env.PUBLIC_URL + "/Assets/noMan.jpg"}
              />
              <Image
                variant="top"
                className="mt-3 ms-4"
                style={{
                  width: "180px",
                  height: "180px",
                  position: "absolute",
                }}
                src={process.env.PUBLIC_URL + "/Assets/Pic1.jpg"}
                roundedCircle
              />
              <Row className="ms-3 mt-3">
                <Col lg="8">
                  <p className="fw-bold fs-5">Ajie Darmawan</p>
                  <p>Kerja Cerdas</p>
                  <p>Jawa Barat, Indonesia. Informasi Kontak</p>
                  <p>100 Koneksi</p>
                </Col>
                <Col>
                  <div className="mb-3">
                    <Image
                      style={{ width: "50px" }}
                      src={process.env.PUBLIC_URL + "/Assets/Image.jpg"}
                    />
                    <span className="ms-3">Cras justo odio</span>
                  </div>
                  <div>
                    <Image
                      style={{ width: "50px" }}
                      src={process.env.PUBLIC_URL + "/Assets/Image.jpg"}
                    />
                    <span className="ms-3">Cras justo odio</span>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Biodata</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Aktivitas</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <Card.Title>Pengalaman</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4">
            <Card style={{ width: "20rem" }}>
              <Card.Header>Learning</Card.Header>
              <Card.Body>
                <Card.Text>
                  Tambahkan keahlian baru dengan kursus ini, gratis selama 24
                  jam
                </Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Image style={{ width: "100px" }} src={process.env.PUBLIC_URL + "/Assets/Image.jpg"} />
                  <span className="ms-3">Cras justo odio</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Image style={{ width: "100px" }} src={process.env.PUBLIC_URL + "/Assets/Image.jpg"} />
                  <span className="ms-3">Cras justo odio</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Image style={{ width: "100px" }} src={process.env.PUBLIC_URL + "/Assets/Image.jpg"} />
                  <span className="ms-3">Cras justo odio</span>
                </ListGroup.Item>
                <ListGroup.Item className="text-center fw-bold">
                  <Link to="/" style={{ textDecoration: "none" }}>
                    Lihat Rekomendasi Saya
                  </Link>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;

import React from "react";
import Header from "../Components/HeaderFeed.js";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroupItem,
  Image,
  ListGroup,
  CardGroup,
} from "react-bootstrap";

import { Link } from "react-router-dom";

const Connection = () => {
  return (
    <div>
      <Header />

      <Container>
        <Row className="mt-5">
          <Col lg="3" className="d-flex justify-content-center">
            <Card style={{ width: "18rem", height: "30rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Link to={`/profile/`}>
                  <Image
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                    variant="top"
                    src={process.env.PUBLIC_URL + "/Assets/Image.jpg"}
                    roundedCircle
                  />
                </Link>
              </div>
              <Card.Body className="text-center">
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/profile"
                >
                  <Card.Title>Muhamad Ajie Darmawan</Card.Title>
                </Link>
                <Card.Text>Kerja Cerdas</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Koneksi Anda <span style={{ float: "right" }}>50</span>
                </ListGroupItem>
                <ListGroupItem>
                  Kontak <span style={{ float: "right" }}>50</span>
                </ListGroupItem>
                <ListGroupItem>
                  Orang yang Saya Ikuti{" "}
                  <span style={{ float: "right" }}>50</span>
                </ListGroupItem>
                <ListGroupItem>Acara</ListGroupItem>
                <ListGroupItem>Halaman</ListGroupItem>
                <ListGroupItem>Newsletter</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
          <Col>
            <Card body>Orang yang mungkin anda kenal</Card>
            <CardGroup>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
            <CardGroup>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{" "}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card className="m-3">
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Connection;

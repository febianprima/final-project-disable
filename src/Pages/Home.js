import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  CardGroup,
  Carousel,
} from "react-bootstrap";
import styles from "../Css/Home.module.css";
import ReactPlayer from "react-player/youtube";

function Home() {
  return (
    <>
      <Header />

      <div className={styles.warnaHero}>
        <Container>
          {/* Hero Section */}
          <Row>
            <Col md lg="4" className="mt-5">
              <p className={styles.textHero}>Disable Is Available</p>
              <p className={`mb-4 ${styles.textSlogan}`}>
                "Kenali saya karena kemampuan saya, bukan disabilitas saya."
              </p>
              <Button className="me-3" variant="success">
                Sign Up
              </Button>
              <Button href="#videoMotivasi">Watch Video</Button>
            </Col>
            <Col md lg="8" className="mt-3">
              <Image className={styles.imgHero} src="../Assets/ImageHero.png" />
            </Col>
          </Row>

          {/* Features */}
          <CardGroup className="mt-5 mb-5">
            <Card className={`me-4 bg-transparent ${styles.borderNone}`}>
              <Card.Img
                className={styles.imgFeature}
                variant="top"
                src="../Assets/feature1.png"
              />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={`me-4 bg-transparent ${styles.borderNone}`}>
              <Card.Img
                className={styles.imgFeature}
                variant="top"
                src="../Assets/feature1.png"
              />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className={`me-4 bg-transparent ${styles.borderNone}`}>
              <Card.Img
                className={styles.imgFeature}
                variant="top"
                src="../Assets/feature1.png"
              />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>

          {/* Article */}
          <Row style={{ marginTop: "100px", marginBottom: "100px" }}>
            <Col lg="6">
              <p className={styles.textArtikel}>Lorem Ipsum is simply dummy</p>
              <p>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </Col>
            <Col lg="6">
              <Image style={{ width: "95%" }} src="../Assets/Image.jpg" />
            </Col>
          </Row>
        </Container>

        {/* Video */}
        <div className={`mb-5 ${styles.bgVideo}`}>
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className={styles.playerWrapper}>
                <ReactPlayer
                  controls
                  width="100%"
                  height="100%"
                  className={`mt-4 ${styles.reactPlayer}`}
                  id="videoMotivasi"
                  url="https://www.youtube.com/watch?v=aRVf6Sw7rcc"
                />
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>
        </div>

        <Container>
          {/* Quotes */}
          <Row>
            <Col lg="2"></Col>
            <Col lg="8">
              <div className="mb-5 text-center">
                <p className={styles.quotes}>Quotes</p>
                <p>
                  "My advice to other disable people would be, concentrate on
                  things your disability doesn’t prevent you doing well, and
                  don’t regret the things it interferes with. Don’t be disabled
                  in spirit as well as physically."
                </p>
                <p className="mt-5">Stephen Hawking</p>
              </div>
            </Col>
            <Col lg="2"></Col>
          </Row>

          {/* Testimonials */}
          <p className={`mt-5 text-center ${styles.quotes}`}>Testmonials</p>
          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100 fluid"
                src="../Assets/Image.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fluid"
                src="../Assets/Image.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 fluid"
                src="../Assets/Image.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Footer />
      </div>
    </>
  );
}

export default Home;

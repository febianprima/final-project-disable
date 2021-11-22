import React from "react";
import styles from "../Css/Contact.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Container, Row, Col, Form, Image, Button } from "react-bootstrap";

function About() {
  return (
    <>
      <Header />

      <Container style={{ marginBottom: "100px" }}>
        <p
          id="get-in"
          className="fs-1 fw-bold mt-5 mb-5 d-flex justify-content-center"
        >
          <span className="garisSpan"></span>Get In Touch
          <span className="garisSpan"></span>
        </p>

        <Row className="align-items-start">
          <Col lg="4">
            <div className="mb-3">
              <span>Phone</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src="../assets/phone.png"
                alt="phone"
              />
              <span>+62 8952 2767 180</span>
            </div>
            <div className="mb-3">
              <span>Email</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src="../assets/envelope.png"
                alt="email"
              />
              <span>info@disable.id</span>
            </div>
            <div className="mb-3">
              <span>Website</span>
              <br></br>
              <Image
                className={`m-2 ${styles.socialProfile}`}
                src="../assets/browser.png"
                alt="website"
              />
              <span>https://www.disableIsAvailable.id/</span>
            </div>

            <span>Social Profile</span>
            <div className="mb-5">
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src="../assets/facebook.png"
                alt="facebook"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src="../assets/twitter.png"
                alt="twitter"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src="../assets/instagram.png"
                alt="instagram"
              />
              <Image
                className={`m-1 ${styles.socialProfile}`}
                src="../assets/linkedin.png"
                alt="linkedin"
              />
            </div>
          </Col>
          <Col lg="8">
            <p className="mb-4">
              If you have any suggestion, project or even you want to say,
              Hello.. Please fill out the form below and I will reply you
              shortly.
            </p>

            <Form>
              <Form.Group className="mb-4">
                <Form.Label>
                  Full Name <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Email Address <span>*</span>
                </Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>
                  Phone Number <span>*</span>
                </Form.Label>
                <Form.Control type="text" placeholder="Your Phone Number" />
              </Form.Group>
              <Form.Group
                className="mb-4"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  placeholder="Your Message …"
                  as="textarea"
                  rows={5}
                />
              </Form.Group>
            </Form>
            <Button
              className={`btn btn-primary text-white me-5 col-lg-4 mx-auto ${styles.forButton}`}
            >
              <span>
                <Image
                  className={styles.imgButton}
                  src="../assets/send-mail.png"
                />
              </span>{" "}
              Send Message
            </Button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default About;

import React from "react";
import styles from "../Css/Footer.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={`mt-5 ${styles.warnaBg}`}>
      <Container>
        <Row>
          <Col lg="3">
            <p className="mt-5 text-white">Disable</p>
            <Link to="/">
              <Image className={styles.icImage} src="../Assets/ic_fb.png" />
            </Link>
            <Link to="/">
              <Image
                className={styles.icImage}
                src="../Assets/ic_twitter.png"
              />
            </Link>
            <Link to="/">
              <Image className={styles.icImage} src="../Assets/ic_ig.png" />
            </Link>
            <Link to="/">
              <Image
                className={styles.icImage}
                src="../Assets/ic_linkedin.png"
              />
            </Link>
          </Col>
          <Col>
            <p style={{ color: "#B4FE98" }} className="mt-5">
              Get Started
            </p>
            <div className="d-flex flex-column">
              <Link style={{ textDecoration: "none" }} to="/">
                Home
              </Link>
              <Link style={{ textDecoration: "none" }} to="/about">
                About Us
              </Link>
              <Link style={{ textDecoration: "none" }} to="/contact">
                Contact
              </Link>
            </div>
          </Col>
          <Col>
            <p style={{ color: "#FBF46D" }} className="mt-5">
              Our Company
            </p>
          </Col>
          <Col>
            <p style={{ color: "#B983FF" }} className="mt-5">
              Get Started
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;

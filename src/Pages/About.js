import React from "react";
import styles from "../Css/About.module.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Header />

      <div className={styles.bgImgAbout}>
        <div
          className="
              overlay
              px-5
              d-flex
              flex-column
              justify-content-center
              align-items-center
            "
        >
          <Container className="px-5">
            <h2 className="pt-5 fw-bolder text-center mb-3">About Us</h2>
            <p className="px-5 text-center">
              As a brandnew Catalyst, we are aiming to become one of the best
              tech companies in Indonesia. Joining the tech industry in
              Indonesia since 2015 under the name of Sepulsa, we have evolved as
              a B2B tech company in 4 years providing various services such as
              Bill Payment Aggregator, Distribution Network, Promotion Platform,
              and Tech Academy.
            </p>
          </Container>
          <Button className="mt-5">Contact</Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;

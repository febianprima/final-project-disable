import React from "react";
import "../Css/About.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Button, Container } from "react-bootstrap";

function About() {
  return (
    <>
      <Header />

      <div >
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
              Disable is Available membantu para penyandang disabilitas untuk dapat berkomunikasi dengan
              penyandang disabilitas yang lain, sehingga mereka dapat lebih mengenal satu sama lain sehingga
              dapat bertukar informasi.
              Disable is Available membantu penggunanya untuk dapat menemukan lapangan pekerjaan yang sesuai
              dengan kemampuan mereka. Platform ini menampilkan lowongan pekerjaan yang sesuai untuk pengguna.

              Disable is Available merupakan sebuah platform yang memiliki beberapa fitur agar para pengguna dapat
              bersosialisasi di dalamnya. Ada fitur profil sehingga pengguna dapat mengatur informasi pribadi yang
              diperlihatkan kepada pengguna lain. Fitur post status memungkinkan pengguna untuk dapat memposting 
              sesuatu dan membagikannya kepada pengguna lainnya. Fitur komentar digunakan oleh pengguna yang ingin
              mengomentari postingan dari pengguna lain. Fitur like digunakan oleh pengguna untuk menyukai postingan
              dari pengguna lain. Fitur share digunakan oleh pengguna untuk membagikan postingan pengguna lain. 
              Selain itu, terdapat juga fitur personal message yang memungkinkan pengguna untuk dapat terhubung dan
              mengirimkan pesan pribadi ke pengguna lain dengan lebih personal tanpa diketahui oleh orang lain.
            </p>

            <div className="d-flex justify-content-center title-margin">
                <div className="d-flex justify-content-start">
                    <h2 className="pt-5 fw-bolder text-center mb-3">Meet Our Team</h2>
                </div>
            </div>
            <main>
              <div className="d-flex justify-content-around">
                  <div className="d-flex justify-content-center">
                      <div className="row align-items-center">
                          <div className="col-md-4 mt-4">
                              <img className="img-side" src="" alt="" />
                              <div>
                                  <p className="text-name">Ajie Darmawan</p>
                                  <p className="text-role">Frontend Development</p>
                              </div>
                          </div>
                          <div className="col-md-4 mt-4">
                              <img className="img-center" src="" alt="" />
                              <div>
                                  <p className="text-name">Ari Febriansyah Prima</p>
                                  <p className="text-role">Frontend Development</p>
                              </div>
                          </div>
                          <div className="col-md-4 mt-4">
                              <img className="img-side" src="" alt="" />
                              <div>
                                  <p className="text-name">Fransiska Renni</p>
                                  <p className="text-role">Seksi Doa</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </main>
          </Container>
          <Button className="mt-5">Contact</Button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;

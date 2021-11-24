import React from "react";
import Header from "../Components/HeaderFeed";
import { Container, Image } from "react-bootstrap";

function Jobs() {
  return (
    <div>
      <Header />
      <Image src="../Assets/Image.jpg" className="img-fluid" alt="..." />
      <Container className="mt-3 mb-5">
        <div className="text-center mt-4 mb-5">
          <h1>Cari Lowongan Sesuai Keunikanmu</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <Image
                src="../Assets/Image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Lowongan Pekerjaan Pegadaian</h5>
                <p className="card-text">
                  Kabar gembira untuk penyandang disabilitas yang sedang mencari
                  kerja. PT Pegadaian (Persero) kembali membuka rekrutmen
                  karyawan baru untuk penyandang disabilitas.
                </p>
                <a
                  href="https://money.kompas.com/read/2021/07/09/064314026/pegadaian-buka-lowongan-kerja-khusus-untuk-penyandang-disabilitas."
                  target="_blank"
                >
                  Read More ....
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image
                src="../Assets/Image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lowongan Pekerjaan CallCenter - PT MitraComm
                </h5>
                <p className="card-text">
                  Khusus penyandang staus disabilitas baik Fisik Maupun Mental
                  Siap kerja dalam sistem shifting Mampu mengoperasikan komputer
                  (MS Office) Penempatan kerja BSD City Tangerang Selatan
                </p>
                <a
                  href="https://jobindo.com/Lowongan-Pekerjaan-call-center-khusus-28805.html"
                  target="_blank"
                >
                  Read More ....
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image
                src="../Assets/Image.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">
                  Lowongan Pekerjaan Resepsionis - PT Astra
                </h5>
                <p className="card-text">
                  Maksimal usia 27 tahun Pendidikan D3 atau minimal
                  SMA/D1/sederajat dengan pengalaman kerja minimal 1 tahun;
                  Penyandang disabilitas tunadaksa Mampu berkomunikasi berbahasa
                  Inggris; Mampu mengoperasikan komputer (Ms. Excell, Ms.
                  Outlook, Ms. Word).
                </p>
                <a
                  href="https://jobindo.com/Lowongan-Pekerjaan-receptionist-30647.html"
                  target="_blank"
                >
                  Read More ....
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Jobs;

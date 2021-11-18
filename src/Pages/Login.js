import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import Header from '../Components/Header';
import axios from "axios";
import Api from "../Utils/Api";
import styles from '../Css/Login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    // const config = {
    //   headers: {
    //     "X-Authorization": "blablabla",
    //   },
    // };
    await axios
      .post(Api.userLogin, { email, password })
      .then((res) => {
        const result = res.data;
        console.log(result)
        if (res.status === 200) {
          // localStorage.setItem("userToken", result.token);
          // localStorage.removeItem("userToken")
          navigate("/feed");
        } else {
          alert(result.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className={`${styles.page} min-vh-100 d-flex flex-row align-items-center`}>
        <CContainer>
          <CRow className="justify-content-center">
            <CCol sm={10}>
              <CCardGroup>
                <CCard className= {`p-4 ${styles.login}`}>
                  <CCardBody>
                    <CForm>
                      <h1>Login</h1>
                      <p className="text-medium-emphasis">
                        Masuk ke akun Anda!
                      </p>
                      <CInputGroup className="mb-3">
                        <CInputGroupText>
                          <CIcon content={freeSet.cilUser} />
                        </CInputGroupText>
                        <CFormInput
                          placeholder="Username"
                          autoComplete="username"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </CInputGroup>
                      <CInputGroup className="mb-4">
                        <CInputGroupText>
                          <CIcon icon={freeSet.cilLockLocked} />
                        </CInputGroupText>
                        <CFormInput
                          type="password"
                          placeholder="Password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </CInputGroup>
                      <CRow>
                        <CCol xs={6}>
                          <CButton
                            color="primary"
                            className={`px-4 ${styles.loginButton}`}
                            onClick={() => handleSubmit()}
                          >
                            Login
                          </CButton>
                        </CCol>
                        <CCol xs={6} className="text-right">
                          <CButton color="link" className="px-0">
                            Lupa password?
                          </CButton>
                        </CCol>
                      </CRow>
                    </CForm>
                  </CCardBody>
                </CCard>
                <CCard
                  className={`py-5 ${styles.register}`}
                >
                  <CCardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>
                        Belum punya akun?
                      </p>
                      <Link to="/register">
                        <CButton
                          color="primary"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Daftar sekarang!
                        </CButton>
                      </Link>
                    </div>
                  </CCardBody>
                </CCard>
              </CCardGroup>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;

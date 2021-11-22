import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage
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

  const handleSubmit = async (e) => {
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
          localStorage.setItem("userData", JSON.stringify(result.data));
          // localStorage.removeItem("userToken");
          navigate("/feed");
          e.preventDefault();
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
      <div className={`${styles.page} min-vh-100 d-flex flex-row`} style={{textAlign:'center'}}>
        <CContainer>
          <CRow>
            <CCol sm={6} className='mt-5'>
              <CRow>
                <h1 className='mb-4' style={{color:'white', fontWeight:'bolder'}}>
                  Selamat Datang!
                </h1>
              </CRow>
              <CRow>
                <CImage className= 'mt-4 center' align='center' style={{width: '80vw'}} src='../Assets/welcome.png' />
              </CRow>
            </CCol>
        
            <CCol sm={6} className="justify-content-center mt-2">
              <CCard className= {`p-4 ${styles.login}`}>
                <CCardBody>
                  <CForm onSubmit = {handleSubmit()}>
                    <h2 className="text-medium-emphasis mb-3">
                      Masuk ke akun Anda!
                    </h2>
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
                          type="submit"
                          color="success"
                          className={`px-4 ${styles.loginButton}`}
                          onClick= {()=>handleSubmit()}
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
                  <div>
                  <CImage className= 'center mt-3 mb-3' style={{width: '375px', height: '5px'}} src='../Assets/divider.png' />
                    <p>
                      Belum punya akun?
                    </p>
                    <Link to="/register">
                      <CButton
                        color="success"
                        active
                        tabIndex={-1}
                      >
                        Daftar sekarang
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Login;

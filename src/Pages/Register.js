import React, { useState } from "react";
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
  CFormFeedback,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import axios from "axios";
import Header from '../Components/Header';
import { Navigate } from "react-router";
import Api from "../Utils/Api";
import styles from '../Css/Login.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPass, setRepeatPass] = useState("");
  const [validated, setValidated] = useState(false)

  const handleSubmit = async (event) =>{
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }else{
    if(password !== repeatPass){
      console.log("Password tidak sama!");
    } else {
      await axios
        .post(Api.userRegister, { username, email, password })
        .then((res) => {
          const result = res.data;
          console.log(result);

          if(res.status === 201){
            localStorage.setItem("userData", JSON.stringify(result.data));
            navigate("/create")
            e.preventDefault()
          }else{
            alert(result.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
    setValidated(true)
  };

  return (
    <>
      <Header />
      <div className= {`${styles.page} min-vh-100 d-flex flex-row align-items-center`}>
        <CContainer>
          <CRow className="justify-content-center">
            <CCol md={9} lg={7} xl={6}>
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <CForm
                    noValidate
                    validated={validated}
                    onSubmit={handleSubmit}
                  >
                    <h1>Register</h1>
                    <p className="text-medium-emphasis">Create your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        placeholder="Username"
                        autoComplete="username"
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please choose an username.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput 
                        placeholder="Email" 
                        autoComplete="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please choose an email.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please set a password.</CFormFeedback>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        onChange={(e) => setRepeatPass(e.target.value)}
                        required
                      />
                      <CFormFeedback valid>Looks good!</CFormFeedback>
                      <CFormFeedback invalid>Please repeat the password.</CFormFeedback>
                    </CInputGroup>
                    <div className="d-grid">
                      <CButton color="success" type="submit">
                        Create Account
                      </CButton>
                    </div>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </>
  );
};

export default Register;

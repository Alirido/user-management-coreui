import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCardFooter,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
    };
  }

  handleSubmit(event) {
    alert("User was submitted!");
    console.log("aldo - debug:");
    // console.log();
    // const newUser = {
    //   name: this.id
    // }
    event.preventDefault();
  }

  render() {
    return (
      <CRow>
        <CCol xl={8}>
          <CCard>
            <CCardHeader>
              Add User
              <small> Form</small>
            </CCardHeader>
            <CCardBody>
              {/* <form onSubmit={this.handleSubmit}>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-username">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="username"
                      id="username"
                      name="username"
                      placeholder="Enter Username..."
                      autoComplete="username"
                    />
                    <CFormText className="help-block">
                      Please enter your username
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-name">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="name"
                      id="hf-name"
                      name="hf-name"
                      placeholder="Enter Name..."
                      autoComplete="name"
                    />
                    <CFormText className="help-block">
                      Please enter your name
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="hf-password"
                      name="hf-password"
                      placeholder="Enter Password..."
                      autoComplete="password"
                    />
                    <CFormText className="help-block">
                      Please enter your password
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <br />
                <hr />
                <CFormGroup>
                  <CButton type="submit" size="sm" color="primary">
                    Save change
                  </CButton>
                </CFormGroup>
              </form> */}
              <CForm onSubmit={this.handleSubmit} className="form-horizontal">
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-username">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="username"
                      id="hf-username"
                      name="hf-username"
                      placeholder="Enter Username..."
                      autoComplete="username"
                    />
                    <CFormText className="help-block">
                      Please enter your username
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-name">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="name"
                      id="hf-name"
                      name="hf-name"
                      placeholder="Enter Name..."
                      autoComplete="name"
                    />
                    <CFormText className="help-block">
                      Please enter your name
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="hf-password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="hf-password"
                      name="hf-password"
                      placeholder="Enter Password..."
                      autoComplete="password"
                    />
                    <CFormText className="help-block">
                      Please enter your password
                    </CFormText>
                  </CCol>
                </CFormGroup>
                <br />
                <hr />
                <CFormGroup>
                  <CButton type="submit" size="sm" color="primary">
                    Save change
                  </CButton>{" "}
                  <CButton type="Cancel" size="sm" color="danger" to="/users">
                    Cancel
                  </CButton>
                </CFormGroup>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    );
  }
}

export default CreateUser;

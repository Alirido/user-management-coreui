import React, { Component } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CFormText,
  CInput,
  CLabel,
  CRow,
} from "@coreui/react";
import axios from "axios";

import validate from "./formValidation";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      password: "",
      errors: {},
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { isValid, errors } = validate(this.state);

    this.setState({ errors: errors });
    if (isValid) {
      const newUser = {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
      };
      axios
        .post("http://localhost:8080/users", newUser)
        .then((resp) => {
          this.props.history.push("/users");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
              <CForm
                onSubmit={this.handleSubmit.bind(this)}
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="username">Username</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username..."
                      autoComplete="on"
                      value={this.state.username}
                      onChange={this.handleChange.bind(this)}
                    />
                    <CFormText className="help-block">
                      Please enter your username
                    </CFormText>
                    {this.state.errors.username ? (
                      <div style={{ color: "red" }}>
                        {this.state.errors.username}
                      </div>
                    ) : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="name">Name</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name..."
                      autoComplete="on"
                      value={this.state.name}
                      onChange={this.handleChange.bind(this)}
                    />
                    <CFormText className="help-block">
                      Please enter your name
                    </CFormText>
                    {this.state.errors.name ? (
                      <div style={{ color: "red" }}>
                        {this.state.errors.name}
                      </div>
                    ) : null}
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="password">Password</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CInput
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password..."
                      autoComplete="on"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this)}
                    />
                    <CFormText className="help-block">
                      Please enter your password
                    </CFormText>
                    {this.state.errors.password ? (
                      <div style={{ color: "red" }}>
                        {this.state.errors.password}
                      </div>
                    ) : null}
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

export default EditUser;

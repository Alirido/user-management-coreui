import React, { useState, useEffect } from "react";
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

const CreateUser = () => {
  return (
    <CRow>
      <CCol xl={8}>
        <CCard>
          <CCardHeader>
            Edit User
            <small> Form</small>
          </CCardHeader>
          <CCardBody>
            <CForm action="" method="post" className="form-horizontal">
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
                    autoComplete="current-username"
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
                    autoComplete="current-name"
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
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton type="submit" size="sm" color="primary">
              Submit
            </CButton>{" "}
            <CButton type="Cancel" size="sm" color="danger" to="/users">
              Cancel
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateUser;

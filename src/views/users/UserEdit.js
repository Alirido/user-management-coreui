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

import CIcon from "@coreui/icons-react";

const CreateUser = () => {
  // const history = useHistory();
  // const queryPage = useLocation().search.match(/page=([0-9]+)/, "");
  // const currentPage = Number(queryPage && queryPage[1] ? queryPage[1] : 1);
  // const [page, setPage] = useState(currentPage);

  // const pageChange = (newPage) => {
  //   currentPage !== newPage && history.push(`/users?page=${newPage}`);
  // };

  // useEffect(() => {
  //   currentPage !== page && setPage(currentPage);
  // }, [currentPage, page]);

  return (
    <CRow>
      <CCol xl={8}>
        <CCard>
          <CCardHeader>
            User Edit
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
                    autoComplete="current-password"
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
              <CIcon name="cil-scrubber" /> Submit
            </CButton>{" "}
            <CButton type="reset" size="sm" color="danger">
              <CIcon name="cil-ban" /> Reset
            </CButton>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateUser;

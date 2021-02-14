import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from "@coreui/react";

import UsersData from "./UsersData";
import CIcon from "@coreui/icons-react";

const fields = [
  { key: "name", _style: { width: "40%" } },
  "username",
  { key: "role", _style: { width: "20%" } },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];

const Users = () => {
  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            <strong>User List</strong>
          </CCardHeader>
          <CCardBody>
            <UsersData url="http://localhost:8080/users" fields={fields} />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xl={2}>
        <CButton block color="success" to="/users/create">
          <CIcon size="sm" name="cil-user-follow" /> Add User
        </CButton>
      </CCol>
    </CRow>
  );
};

export default Users;

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
  { key: "no", _style: { width: "6%" }, sorter: false, filter: false },
  "name",
  "username",
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

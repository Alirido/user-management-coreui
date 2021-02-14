import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CDataTable,
  CRow,
} from "@coreui/react";

import usersData from "./UsersData";
import CIcon from "@coreui/icons-react";

const fields = [
  { key: "name", _style: { width: "40%" } },
  "registered",
  { key: "role", _style: { width: "20%" } },
  { key: "status", _style: { width: "20%" } },
  {
    key: "show_details",
    label: "",
    _style: { width: "1%" },
    sorter: false,
    filter: false,
  },
];

const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};

const Users = () => {
  const [details, setDetails] = useState([]);

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const history = useHistory();

  return (
    <CRow>
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            <strong>User List</strong>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              tableFilter
              hover
              pagination
              itemsPerPageSelect
              itemsPerPage={5}
              sorter
              pagination
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                show_details: (item, index) => {
                  return (
                    <td className="py-2">
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={() => {
                          toggleDetails(index);
                        }}
                      >
                        {details.includes(index) ? "Hide" : "Actions"}
                      </CButton>
                    </td>
                  );
                },
                details: (item, index) => {
                  return (
                    <CCollapse show={details.includes(index)}>
                      <CCardBody>
                        <h4>{item.username}</h4>
                        <p className="text-muted">User with ID: {item.id}</p>
                        <CButton
                          size="sm"
                          color="primary"
                          // onClick={() => history.push(`/users/${item.id}`)}
                          to={`/users/${item.id}`}
                        >
                          Show
                        </CButton>
                        <CButton
                          size="sm"
                          color="info"
                          className="ml-1"
                          onClick={() => history.push(`/users/${item.id}/edit`)}
                        >
                          Edit
                        </CButton>
                        <CButton size="sm" color="danger" className="ml-1">
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCollapse>
                  );
                },
              }}
            />
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

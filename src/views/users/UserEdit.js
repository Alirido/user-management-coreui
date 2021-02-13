import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import {
  CBadge,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination,
} from "@coreui/react";

import usersData from "./UsersData";
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
      <CCol xl={10}>
        <CCard>
          <CCardHeader>
            <strong>Edit User</strong>
          </CCardHeader>
          <CCardBody>Testing</CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default CreateUser;

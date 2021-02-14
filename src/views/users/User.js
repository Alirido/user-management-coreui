import React, { useState, useEffect } from "react";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import axios from "axios";

const User = ({ match }) => {
  const [user, setUser] = useState([]);
  const api_url = "http://localhost:8080/users/" + match.params.id;

  useEffect(() => {
    axios
      .get(api_url)
      .then((response) => {
        setUser(Object.entries(response.data.data));
      })
      .catch((error) => {
        console.log(error);
        setUser([
          [
            "id",
            <span>
              <CIcon className="text-muted" name="cui-icon-ban" /> Not found
            </span>,
          ],
        ]);
      });
  }, [match.url]);

  return (
    <CRow>
      <CCol lg={6}>
        <CCard>
          <CCardHeader>User id: {match.params.id}</CCardHeader>
          <CCardBody>
            <table className="table table-striped table-hover">
              <tbody>
                {user.map(([key, value], index) => {
                  return key == "password" ? null : (
                    <tr key={index.toString()}>
                      <td>{`${key}:`}</td>
                      <td>
                        <strong>{value}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default User;

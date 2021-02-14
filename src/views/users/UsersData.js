import React from "react";
import { useHistory } from "react-router-dom";
import {
  CBadge,
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
} from "@coreui/react";

import axios from "axios";

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

class UsersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      details: [],
    };
  }

  fetchUsers() {
    axios
      .get(this.props.url)
      .then((response) => {
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  }

  componentDidMount() {
    setTimeout(() => {
      this.fetchUsers();
    }, 500);
  }

  toggleDetails(index) {
    const position = this.state.details.indexOf(index);
    let newDetails = this.state.details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...this.state.details, index];
    }
    this.setState({
      details: newDetails,
    });
  }

  render() {
    return (
      <>
        <CDataTable
          items={this.state.data}
          fields={this.props.fields}
          tableFilter
          hover
          pagination
          itemsPerPageSelect
          itemsPerPage={5}
          sorter
          pagination
          scopedSlots={{
            no: (item, index) => {
              return <td>{index + 1}</td>;
            },
            show_details: (item, index) => {
              return (
                <td className="py-2">
                  <CButton
                    color="primary"
                    variant="outline"
                    shape="square"
                    size="sm"
                    onClick={() => {
                      this.toggleDetails(index);
                    }}
                  >
                    {this.state.details.includes(index) ? "Hide" : "Actions"}
                  </CButton>
                </td>
              );
            },
            details: (item, index) => {
              return (
                <CCollapse show={this.state.details.includes(index)}>
                  <CCardBody>
                    <h4>{item.name}</h4>
                    <p className="text-muted">User with ID: {item.id}</p>
                    <CButton size="sm" color="primary" to={`/users/${item.id}`}>
                      Show
                    </CButton>
                    <CButton
                      size="sm"
                      color="info"
                      className="ml-2"
                      to={`/users/${item.id}/edit`}
                    >
                      Edit
                    </CButton>
                    <CButton size="sm" color="danger" className="ml-2">
                      Delete
                    </CButton>
                  </CCardBody>
                </CCollapse>
              );
            },
          }}
        />
      </>
    );
  }
}

export default UsersData;

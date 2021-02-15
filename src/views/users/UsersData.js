import React from "react";
import {
  CButton,
  CCardBody,
  CCollapse,
  CDataTable,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
} from "@coreui/react";

import axios from "axios";

class UsersData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      details: [],
      modal: false,
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

  toggleDeleteUser() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  deleteUser(userId) {
    axios
      .delete(this.props.url + "/" + userId)
      .then((response) => {
        this.toggleDeleteUser();
        this.fetchUsers();
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
        return;
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
                    <CButton
                      onClick={this.toggleDeleteUser.bind(this)}
                      size="sm"
                      color="danger"
                      className="ml-2"
                    >
                      Delete
                    </CButton>
                  </CCardBody>
                  <CModal
                    show={this.state.modal}
                    onClose={this.toggleDeleteUser.bind(this)}
                    color="danger"
                  >
                    <CModalHeader closeButton>ARE YOU SURE?</CModalHeader>
                    <CModalBody>
                      User with ID:{item.id} will be deleted. You will not be
                      able to recover user that has been deleted
                    </CModalBody>
                    <CModalFooter>
                      <CButton
                        onClick={this.deleteUser.bind(this, item.id)}
                        color="danger"
                      >
                        Yes, delete it!
                      </CButton>{" "}
                      <CButton
                        color="secondary"
                        onClick={this.toggleDeleteUser.bind(this)}
                      >
                        Cancel
                      </CButton>
                    </CModalFooter>
                  </CModal>
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

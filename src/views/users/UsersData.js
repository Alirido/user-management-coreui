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
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
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
                      // onClick={() => history.push(`/users/${item.id}/edit`)}
                      to={`/users/${item.id}/edit`}
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
      </>
    );
  }
}

/*const usersData = [
  {
    id: 0,
    name: "John Doe",
    registered: "2018/01/01",
    role: "Guest",
    status: "Pending",
  },
  {
    id: 1,
    name: "Samppa Nori",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 2,
    name: "Estavan Lykos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 3,
    name: "Chetan Mohamed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Derick Maximinus",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 5,
    name: "Friderik Dávid",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 6,
    name: "Yiorgos Avraamu",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 7,
    name: "Avram Tarasios",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 8,
    name: "Quintin Ed",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 9,
    name: "Enéas Kwadwo",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 10,
    name: "Agapetus Tadeáš",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 11,
    name: "Carwyn Fachtna",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 12,
    name: "Nehemiah Tatius",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 13,
    name: "Ebbe Gemariah",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 14,
    name: "Eustorgios Amulius",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 15,
    name: "Leopold Gáspár",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 16,
    name: "Pompeius René",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 17,
    name: "Paĉjo Jadon",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 18,
    name: "Micheal Mercurius",
    registered: "2018/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    id: 19,
    name: "Ganesha Dubhghall",
    registered: "2018/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 20,
    name: "Hiroto Šimun",
    registered: "2018/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    id: 21,
    name: "Vishnu Serghei",
    registered: "2018/01/01",
    role: "Member",
    status: "Active",
  },
  {
    id: 22,
    name: "Zbyněk Phoibos",
    registered: "2018/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    id: 23,
    name: "Aulus Agmundr",
    registered: "2018/01/01",
    role: "Member",
    status: "Pending",
  },
  {
    id: 42,
    name: "Ford Prefect",
    registered: "2001/05/25",
    role: "Alien",
    status: "Don't panic!",
  },
  {
    id: 43,
    name: "Ali Rido",
    registered: "2021/02/13",
    role: "Alien",
    status: "Don't panic!",
  },
];*/

export default UsersData;

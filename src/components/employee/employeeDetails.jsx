import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "../complaints/complaint.svg";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { employeeList: [] };
  }

  componentDidMount() {
    fetch(`http://localhost:8080/api/myStore/manager/viewEmployee`)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            employeeList: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  delete(id) {
    return (
      <button type="button" className="btn btn-danger mx-2">
        {" "}
        Delete
      </button>
    );
  }

  renderTable() {
    const { employeeList } = this.state;
    return employeeList.map((value, index) => (
      <tbody key={value.id}>
        <tr>
          <td>{index + 1}</td>
          <td>{value.first_name}</td>
          <td>{value.last_name}</td>
          <td>{value.id}</td>
          <td>{value.user_name}</td>
          <td>{value.phone}</td>
          <td>{this.delete(value.id)}</td>
        </tr>
      </tbody>
    ));
  }

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Crew</h4>
                    </div>
                  </div>
                </div>
              </div>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Employee Id</th>
                    <th>Email</th>
                    <th>Contact No.</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {this.renderTable()}
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;

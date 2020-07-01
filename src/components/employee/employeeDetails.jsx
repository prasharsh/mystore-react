import React, { Component } from "react";
import Table from "react-bootstrap/Table";

import ComplaintImage from "../complaints/complaint.svg";

class EmployeeDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "Crew" };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

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
                    <th> Role </th>
                    <th>Email</th>
                    <th>Start Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> 1 </td>
                    <td> Khanjika </td>
                    <td> Arora </td>
                    <td>
                      <select
                        value={this.state.value}
                        onChange={this.handleChange}
                      >
                        <option value="Crew">Crew</option>
                        <option value="Manager"> Manager </option>
                      </select>
                    </td>
                    <td> kh77899@dal.ca </td>
                    <td> 1-1-2020 </td>

                    <td>
                      <button
                        type="submit"
                        className="btn btn-primary mr-2"
                        onClick={this.onClick}
                      >
                        Save
                      </button>
                      <button type="delete" className="btn btn-danger mr-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeDetails;

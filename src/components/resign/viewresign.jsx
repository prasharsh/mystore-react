import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./resign.css";

class ViewResign extends Component {
  state = {};
  render() {
    return (
      <div>
              <div className="row-name">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>View Resignation Form</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead className="thead-container">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">EMP ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
                    </td>
                    <td>
                      <span>JK675</span>
                    </td>
                    <td>
                      <span>James Blunt</span>
                    </td>
                    <td>
                      <span>Re-locating to different province</span>
                    </td>
                    <td>
                      <span
                        type="submit"
                        className="btn btn-primary mx-2"
                        onClick={() =>
                          this.props.history.push("/home/resigndetails")
                        }
                      >
                        <u>Edit</u>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
    );
  }
}

export default ViewResign ;

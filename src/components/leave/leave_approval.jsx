import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./leave.css";

class LeaveApproval extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row-name">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Pending Leave Approval</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead className="thead-container">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Associate Name</th>
                    <th scope="col">Associate Id</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
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
                      <span>xyz</span>
                    </td>
                    <td>
                      <span>B008564</span>
                    </td>
                    <td>
                      <span>1-07-2020</span>
                    </td>
                    <td>
                      <span>10-07-2020</span>
                    </td>
                    <td>
                      <span>Not feeling well</span>
                    </td>
                    <td>
                      <button type="button" className="btn btn-primary mx-2">
                        {" "}
                        Accept
                      </button>
                      <button type="button" className="btn btn-primary mx-2">
                        {" "}
                        Reject
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveApproval;

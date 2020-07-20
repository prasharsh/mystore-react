import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./leave.css";

class LeaveHistory extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <table className="table-sm table-bordered table-active">
                      <tbody>
                        <tr>
                          <td>
                            <span
                              type="submit"
                              onClick={() =>
                                this.props.history.push("/home/leave")
                              }
                            >
                              Apply Leave
                            </span>
                          </td>
                          <td>
                            <span className="btn active">Leave History</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="row-name">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Leave History</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <table className="table">
                <thead className="thead-container">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span>1</span>
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
                      <span
                        type="submit"
                        onClick={() =>
                          this.props.history.push("/home/leavedetails")
                        }
                      >
                        <u>Pending</u>
                      </span>
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

export default LeaveHistory;

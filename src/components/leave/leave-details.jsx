import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./leave.css";

class LeaveDetails extends Component {
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
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Leave Details</h4>
                      <hr></hr>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="column1">
                            <b>Leave start date :</b>
                          </td>
                          <td className="column2"> 1-07-2020 </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            {" "}
                            <b>Leave end date : </b>
                          </td>
                          <td className="column2"> 10-07-2020 </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            <b>Reason for leave : </b>
                          </td>
                          <td className="column2"> Not well </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            <b>Request pending : </b>
                          </td>
                          <td className="column2"> Kh87697@dal.ca </td>
                        </tr>
                      </tbody>
                    </table>
                    <br></br>
                    <div className="row">
                      <div className="col-md-12">
                        <div align="center">
                          <div style={{ display: "inline-block" }}>
                            <button
                              onClick={() =>
                                this.props.history.push("/home/leavehistory")
                              }
                              name="submit"
                              className="btn btn-dark mx-2"
                            >
                              Back
                            </button>
                            <button
                              onClick={() =>
                                this.props.history.push("/home/leavehistory")
                              }
                              name="submit"
                              className="btn btn-dark mx-2"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveDetails;

import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "../complaints/complaint.svg";
import DatePickerComp from "./date-picker-comp";
import "../login/login.css";
import "./leave.css";

class ApplyLeave extends Component {
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
                            <span className="btn active">Apply Leave</span>
                          </td>
                          <td>
                            <span
                              type="submit"
                              onClick={() =>
                                this.props.history.push("/home/leavehistory")
                              }
                            >
                              Leave History
                            </span>
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
                      <h4>Apply Leave</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <Table responsive="sm">
                <tbody>
                  <tr>
                    <td>
                      <p>
                        <b>Start Date : </b>
                      </p>
                    </td>
                    <td>
                      <DatePickerComp />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>
                        {" "}
                        <b>End Date : </b>
                      </p>
                    </td>
                    <td>
                      <DatePickerComp />{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>
                        {" "}
                        <b>Reason for applying leave : </b>
                      </label>
                    </td>
                    <td>
                      <textarea
                        className="form-control"
                        id="textarea"
                        rows="1"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </Table>
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
                        className="btn btn-dark"
                      >
                        Apply
                      </button>
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

export default ApplyLeave;

import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "../complaints/complaint.svg";
import DatePickerComp from "./date-picker-comp";
import "../login/login.css";
import "./leave.css";

class ApplyLeave extends Component {
  constructor() {
    super();
    this.state = {
      startdate: "",
      enddate: "",
      reason: "",
      empid: "",
      fields: {},
    };
  }

  handleChange = (e) => {
    let fields = this.state.fields;
    this.setState({ reason: e.target.value });
  };

  startDate = (value) => {
    this.setState({ startdate: value });
  };

  endDate = (value) => {
    this.setState({ enddate: value });
  };

  applyLeave = () => {
    //this.props.history.push("/home/resign");
    console.log("hiii");
    console.log(this.props);
    let leave = {
      empid: localStorage.getItem("id"),
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      reason: this.state.reason,
    };
    const empid = localStorage.getItem("id");
    fetch(`http://localhost:8080/api/myStore/leave/apply/${empid}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(leave),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const items = data;
        console.log(items);
        if (items === "Success") {
          alert("Leave applied successfully");
        } else if (items === "Duplicate") {
          alert(
            "Leave has already been applied for the respective start and end date"
          );
        } else {
          alert("Error in applying leave");
        }
      });
    this.props.history.push("/home/leavehistory");
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
                      <DatePickerComp parentCallback={this.startDate} />{" "}
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
                      <DatePickerComp parentCallback={this.endDate} />
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
                        name="reason"
                        value={this.state.fields.reason}
                        onChange={this.handleChange}
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
                        onClick={this.applyLeave}
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

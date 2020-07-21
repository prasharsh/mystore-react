import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./leave.css";

class LeaveHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveHistory: [],
    };
  }

  componentDidMount() {
    const empid = localStorage.getItem("id");
    fetch(`http://localhost:8080/api/myStore/leave/viewLeaveHistory/${empid}`)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            leaveHistory: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  renderTable() {
    const { leaveHistory } = this.state;
    if (leaveHistory.length > 0) {
      return leaveHistory.map((value) => (
        <tbody key={value.id}>
          <tr>
            <td>{value.id}</td>
            <td>{value.startdate}</td>
            <td>{value.enddate}</td>
            <td>{value.reason}</td>
            <td>
              <span
                type="submit"
                onClick={() => this.props.history.push("/home/leavedetails")}
              >
                <u>{value.status}</u>
              </span>
            </td>
          </tr>
        </tbody>
      ));
    }
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
                    <th scope="col">Request ID</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">End Date</th>
                    <th scope="col">Reason</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                {this.renderTable()}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveHistory;

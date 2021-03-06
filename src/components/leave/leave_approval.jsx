import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import Table from "react-bootstrap/Table";
import "../login/login.css";
import "./leave.css";

class LeaveApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaveApproval: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://mystore-spring.herokuapp.com/api/myStore/leave/viewLeaveRequest`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            leaveApproval: result,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleAccept(value) {
    const empid = value.empid;
    const name = value.name;
    let acceptLeave = {
      empid: empid,
      startdate: value.startdate,
      enddate: value.enddate,
      status: "Accepted",
    };
    fetch(
      `https://mystore-spring.herokuapp.com/api/myStore/leave/viewLeaveRequest/accept/${empid}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(acceptLeave),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson;
        if (result === "Success") {
          alert("You have Accepted the leave request for  " + name);
        } else alert("Error in performing action, contact the helpdesk.");
      });
    window.location.reload(false);
  }

  handleReject(value) {
    const empid = value.empid;
    const name = value.name;
    let acceptLeave = {
      empid: empid,
      startdate: value.startdate,
      enddate: value.enddate,
      status: "Accepted",
    };
    fetch(
      `https://mystore-spring.herokuapp.com/api/myStore/leave/viewLeaveRequest/reject/${empid}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(acceptLeave),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson;
        if (result === "Success") {
          alert("You have Rejected the leave request for  " + name);
        } else alert("Error in performing action, contact the helpdesk.");
      });
    window.location.reload(false);
  }

  renderTable() {
    const { leaveApproval } = this.state;
    if (leaveApproval.length > 0) {
      return leaveApproval.map((value, index) => (
        <tbody key={index}>
          <tr>
            <td>{index + 1}</td>
            <td>{value.empid}</td>
            <td>{value.name}</td>
            <td>{value.startdate}</td>
            <td>{value.enddate}</td>
            <td>{value.reason}</td>
            <td>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => this.handleAccept(value)}
              >
                {" "}
                Accept
              </button>
            </td>
            <td>
              <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => this.handleReject(value)}
              >
                {" "}
                Reject
              </button>
            </td>
          </tr>
        </tbody>
      ));
    }
  }

  renderData = () => {
    if (this.state.leaveApproval.length != 0) {
      return (
        <Table responsive="sm">
          <thead className="thead-container">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Employee Id</th>
              <th scope="col"> Name</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Reason</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          {this.renderTable()}
        </Table>
      );
    } else {
      return <h3>No leave pending for approval !!</h3>;
    }
  };

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
              {this.renderData()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveApproval;

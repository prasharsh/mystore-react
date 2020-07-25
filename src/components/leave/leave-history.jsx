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

  handleDelete(id) {
    fetch(
      `http://localhost:8080/api/myStore/leave/viewLeaveHistory/delete/${id}`,
      {
        method: "DELETE",
        Accept: "application/json; odata=verbose",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson;
        if (result === "Success") {
          alert("Successfully deleted the leave");
        } else alert("Error in deleting leave, try again");
      });
    window.location.reload(false);
  }

  delete(status, id) {
    if (status == "Pending") {
      return (
        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={() => this.handleDelete(id)}
        >
          {" "}
          Delete
        </button>
      );
    }
  }

  renderTable() {
    const { leaveHistory } = this.state;
    if (leaveHistory.length > 0) {
      return leaveHistory.map((value, index) => (
        <tbody key={value.id}>
          <tr>
            <td>{index + 1}</td>
            <td>{value.id}</td>
            <td>{value.startdate}</td>
            <td>{value.enddate}</td>
            <td>{value.reason}</td>
            <td>{value.status}</td>
            <td>{this.delete(value.status, value.id)}</td>
          </tr>
        </tbody>
      ));
    }
  }

  renderData = () => {
    if (this.state.leaveHistory.length != 0) {
      return (
        <table className="table">
          <thead className="thead-container">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Request ID</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
              <th scope="col">Reason</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {this.renderTable()}
        </table>
      );
    } else {
      return <h3>No leave applied !!</h3>;
    }
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
              {this.renderData()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LeaveHistory;

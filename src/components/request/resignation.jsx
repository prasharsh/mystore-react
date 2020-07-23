import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import ComplaintImage from "../complaints/complaint.svg";
import "./request.css";
class AcceptResignation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resignation: [],
    };
    this.handleReject = this.handleReject.bind(this);
  }

  handleReject(index) {
    const empid = index.empid;
    const name = index.name;
    let resign = {
      empid: localStorage.getItem("id"),
      rid: index.rid,
      status: "Rejected",
    };
    fetch(
      `http://localhost:8080/api/mystore/requests/resignation/reject/${empid}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(resign),
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson;
        if (result === "Success")
          alert("You have Rejected the Resignation for  " + name);
        else alert("Error in performing action, contact the helpdesk.");
      });
    this.setState({
      resignation: this.state.resignation.filter(
        (item) => item.empid !== index.empid
      ),
    });
  }

  handleAccept(index) {
    console.log(index.empid);
    const empid = index.empid;
    const name = index.name;
    let resign = {
      empid: localStorage.getItem("id"),
      rid: index.rid,
      status: "Accepted",
    };
    fetch(
      `http://localhost:8080/api/mystore/requests/resignation/inactive/${empid}`,
      {
        method: "PUT",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson;
        if (result === "Success") {
          fetch(
            `http://localhost:8080/api/mystore/requests/resignation/accept/${empid}`,
            {
              method: "PUT",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(resign),
            }
          )
            .then((response) => response.json())
            .then((responseJson) => {
              const result = responseJson;
              if (result === "Success")
                alert("You have Accepted the Resignation for  " + name);
            });
        } else alert("Error in performing accept action");
      });
    this.setState({
      resignation: this.state.resignation.filter(
        (item) => item.empid !== index.empid
      ),
    });
  }

  componentDidMount() {
    const url = "http://localhost:8080/api/mystore/requests/resignation";

    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            resignation: result,
          });
        },

        (error) => {
          console.log(error);
        }
      );
  }

  renderTable() {
    const { resignation } = this.state;
    if (resignation.length > 0) {
      return resignation.map((index) => (
        <tbody>
          <tr>
            <td>{index.empid}</td>
            <td>{index.name}</td>
            <td>{index.rid}</td>
            <td>{index.reason}</td>
            <td>{index.status}</td>
            <td>
              <Button
                className="btn btn-primary  mr-5"
                onClick={() => this.handleAccept(index)}
              >
                {" "}
                Accept
              </Button>
              <Button
                className="btn btn-primary mr-5"
                onClick={() => this.handleReject(index)}
              >
                {" "}
                Reject
              </Button>
            </td>
          </tr>
        </tbody>
      ));
    }
  }

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
                <h4> Pending Resignations</h4>
                <hr></hr>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <br></br>
        <div>
          <Table classname="resign">
            <thead>
              <tr>
                <th>Employee No.</th>
                <th>Name</th>
                <th>Resignation ID</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            {this.renderTable()}
          </Table>
        </div>
      </div>
    );
  }
}
export default AcceptResignation;

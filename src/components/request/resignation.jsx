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

  handleReject(value) {
    const empid = value.empid;
    const name = value.name;
    let resign = {
      empid: localStorage.getItem("id"),
      rid: value.rid,
      status: "Rejected",
    };
    fetch(
      `https://mystore-spring.herokuapp.com/api/mystore/requests/resignation/reject/${empid}`,
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
          alert("You have rejected the Resignation of  " + name);
        else alert("Error in performing action, contact the helpdesk.");
      });
    this.setState({
      resignation: this.state.resignation.filter(
        (item) => item.empid !== value.empid
      ),
    });
  }

  handleAccept(value) {
    const empid = value.empid;
    const name = value.name;
    let resign = {
      empid: localStorage.getItem("id"),
      rid: value.rid,
      status: "ACCEPTED",
    };
    fetch(
      `https://mystore-spring.herokuapp.com/api/mystore/requests/resignation/accept/${empid}`,
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
        {
          alert("You have accepted the Resignation of  " + name);
          fetch(
            `https://mystore-spring.herokuapp.com/api/mystore/requests/resignation/inactive/${empid}`,
            {
              method: "PUT",
            }
          )
            .then((response) => response.json())
            .then((responseJson) => {
              const result = responseJson;
              
            });
        }
          else alert("Error in performing accept action");

      });
    
    this.setState({
      resignation: this.state.resignation.filter(
        (item) => item.empid !== value.empid
      ),
    });
  }

  componentDidMount() {
    const url = "https://mystore-spring.herokuapp.com/api/mystore/requests/resignation";

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
  novalue(){
    const { resignation } = this.state;
    if (resignation.length > 0)
    {
    return(
    <Table className="resign">
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
    );
    }
    else{
      return(
        <h3>No Resignation Requests</h3>
      )
    }
  }

  renderTable() {
    const { resignation } = this.state;
    if (resignation.length > 0) {
      return resignation.map((value, index) => (
        <tbody key={index}>
          <tr>
            <td>{value.empid}</td>
            <td>{value.name}</td>
            <td>{value.rid}</td>
            <td>{value.reason}</td>
            <td>{value.status}</td>
            <td>
            <button
                type="button"
                className="btn btn-primary mx-2"
                onClick={() => this.handleAccept(value)}
                >
                {" "}
                Accept
                </button>
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
          {this.novalue()}
        </div>
      </div>
    );
  }
}
export default AcceptResignation;

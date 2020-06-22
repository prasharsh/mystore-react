import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "./complaint.svg";
import "../login/login.css";
import ViewComplaintModal from "./view-complaint-modal.jsx";
import ViewResponseModal from "./view-response-modal.jsx";
import CreateResponseModal from "./create-response-modal.jsx";
import CreateComplaintModal from "./create-complaint-modal.jsx";

export default class ComplaintHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComplaint: false,
      showResponse: false,
      showCreateResponse: false,
      showCreateComplaint: false,
      numArray: [1, 2, 3],
    };
  }

  showComplaint = () => {
    this.setState({ showComplaint: true });
  };

  hideComplaint = () => {
    this.setState({ showComplaint: false });
  };

  showResponse = () => {
    this.setState({ showResponse: true });
  };

  hideResponse = () => {
    this.setState({ showResponse: false });
  };

  showCreateResponse = () => {
    this.setState({ showCreateResponse: true });
  };

  hideCreateResponse = (type) => {
    this.setState({ showCreateResponse: false });
  };

  showCreateComplaint = () => {
    this.setState({ showCreateComplaint: true });
  };

  hideCreateComplaint = (type) => {
    this.setState({ showCreateComplaint: false });
    if (type === "save") {
      let array = this.state.numArray;
      array.push(array.length + 1);
      this.setState({ numArray: array });
    }
  };

  openAlert = (msg) => {
    alert(msg);
  };
  render() {
    console.log('HIHOIHOIHOIHO')
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
                      <h4>Complaints</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <Table responsive="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Date</th>
                    <th>Complaint Type</th>
                    <th>View Complaint</th>
                    <th>View Response</th>
                    <th>Respond (Manager Only)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.numArray.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{value}</td>
                        <td>09-06-2020</td>
                        <td>Official</td>
                        <td>
                          <button
                            onClick={this.showComplaint}
                            name="submit"
                            className="btn btn-info"
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={this.showResponse}
                            name="submit"
                            className="btn btn-info"
                          >
                            View
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={this.showCreateResponse}
                            name="submit"
                            className="btn btn-success"
                          >
                            Respond
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <ViewComplaintModal
                show={this.state.showComplaint}
                closeModal={this.hideComplaint}
              ></ViewComplaintModal>
              <ViewResponseModal
                show={this.state.showResponse}
                closeModal={this.hideResponse}
              ></ViewResponseModal>
              <CreateResponseModal
                show={this.state.showCreateResponse}
                closeModal={this.hideCreateResponse}
              ></CreateResponseModal>
              <CreateComplaintModal
                show={this.state.showCreateComplaint}
                closeModal={this.hideCreateComplaint}
              ></CreateComplaintModal>
              <br></br>
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <button
                        onClick={this.showCreateComplaint}
                        name="submit"
                        className="btn btn-dark"
                      >
                        Create Complaint
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


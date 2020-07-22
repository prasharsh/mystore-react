import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ComplaintImage from "./complaint.svg";
import "../login/login.css";
import ViewComplaintModal from "./view-complaint-modal.jsx";
import ViewResponseModal from "./view-response-modal.jsx";
import CreateResponseModal from "./create-response-modal.jsx";
import CreateComplaintModal from "./create-complaint-modal.jsx";
import Loader from "./loader.js";

export default class ComplaintHome extends Component {
  constructor(props) {
    super(props);
    this.onChangePage = this.onChangePage.bind(this);

    this.state = {
      loading: true,
      showComplaint: false,
      showResponse: false,
      showCreateResponse: false,
      showCreateComplaint: false,
      complaints: [],
      activeComplaintText: "",
      activeResponse: "",
      activeComplaintId: 0,
      pageOfItems: [],
    };
  }

  onChangePage(pageOfItems) {
    // update local state with new page of items
    this.setState({ pageOfItems });
  }

  getDetailsAgain() {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("id");
    if (role === "crew") {
      fetch(
        `http://localhost:8080/api/complaints/getComplaintsByUserId/${userId}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            complaints: responseJson,
          });
          this.setState({ loading: false });
        });
    } else if (role === "manager") {
      fetch(`http://localhost:8080/api/complaints/getAllComplaints`)
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
            complaints: responseJson,
          });
          this.setState({ loading: false });
        });
    }
  }

  componentDidMount() {
    this.getDetailsAgain();
  }

  showComplaint = (complaint) => {
    this.setState({ activeComplaintText: complaint });
    this.setState({ showComplaint: true });
  };

  hideComplaint = () => {
    this.setState({ showComplaint: false });
  };

  showResponse = (response) => {
    if (response === null) {
      this.setState({ activeResponse: "No Response Yet" });
    } else {
      this.setState({ activeResponse: response });
    }
    this.setState({ showResponse: true });
  };

  hideResponse = () => {
    this.setState({ showResponse: false });
  };

  showCreateResponse = (complaintId) => {
    this.setState({ activeComplaintId: complaintId });
    this.setState({ showCreateResponse: true });
  };

  hideCreateResponse = (type) => {
    this.setState({ showCreateResponse: false });
    if (type === "save") {
      this.getDetailsAgain();
    }
  };

  showCreateComplaint = () => {
    this.setState({ showCreateComplaint: true });
  };

  hideCreateComplaint = (type) => {
    this.setState({ showCreateComplaint: false });
    if (type === "save") {
      this.getDetailsAgain();
    }
  };

  openAlert = (msg) => {
    alert(msg);
  };
  render() {
    if (this.state.loading) return <Loader />;
    const isManager = localStorage.getItem("role") === "manager";
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
              <div
                className={
                  this.state.complaints.length > 3 ? "scrollTable" : ""
                }
              >
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Date</th>
                      {isManager ? <th>Employee Name</th> : null}
                      <th>Complaint Type</th>
                      <th>View Complaint</th>
                      <th>View Response</th>
                      {isManager ? <th>Respond</th> : null}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.complaints.map((value, index) => {
                      return (
                        <React.Fragment key={index}>
                          <tr>
                            <td>{index + 1}</td>
                            <td>{value.complaintDate}</td>
                            {isManager ? (
                              <td>{value.complaintUserName}</td>
                            ) : null}
                            <td>{value.complaintType}</td>
                            <td>
                              <button
                                onClick={() =>
                                  this.showComplaint(value.complaintText)
                                }
                                name="submit"
                                className="btn btn-info"
                              >
                                View
                              </button>
                              <ViewComplaintModal
                                show={this.state.showComplaint}
                                closeModal={this.hideComplaint}
                                complaint={this.state.activeComplaintText}
                              ></ViewComplaintModal>
                            </td>
                            <td>
                              <button
                                onClick={() =>
                                  this.showResponse(value.response)
                                }
                                name="submit"
                                className="btn btn-info"
                              >
                                View
                              </button>
                              <ViewResponseModal
                                show={this.state.showResponse}
                                closeModal={this.hideResponse}
                                response={this.state.activeResponse}
                              ></ViewResponseModal>
                            </td>
                            {isManager ? (
                              <td>
                                <button
                                  disabled={value.response !== null}
                                  onClick={() =>
                                    this.showCreateResponse(value.id)
                                  }
                                  name="submit"
                                  className="btn btn-success"
                                >
                                  Respond
                                </button>
                                <CreateResponseModal
                                  show={this.state.showCreateResponse}
                                  closeModal={this.hideCreateResponse}
                                  complaintId={this.state.activeComplaintId}
                                ></CreateResponseModal>
                              </td>
                            ) : null}
                          </tr>
                        </React.Fragment>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
              <CreateComplaintModal
                show={this.state.showCreateComplaint}
                closeModal={this.hideCreateComplaint}
              ></CreateComplaintModal>
              <br></br>
              {!isManager ? (
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
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

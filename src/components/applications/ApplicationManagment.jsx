import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./Application.css";
import axios from "axios";

export default class ApplicationManagment extends Component {
  state = {
    application: [],
    selectedJob: {},
    selected: false,
  };

  componentDidMount = async () => {
    let applicationURL = "http://localhost:8080/api/applications/fetchAll";

    await axios.get(applicationURL).then(
      (response) => {
        console.log(response.data);
        this.setState(() => ({ application: response.data }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  handleDetails = (value) => {
    this.props.history.push({
      pathname: "/home/application-details",
      state: { value },
    });
  };
  handleDelete = async (value, index) => {
    console.log(value);
    console.log(index);

    let applicationURL =
      "http://localhost:8080/api/applications/deleteApplication/";

    await axios.delete(applicationURL + `${value.applicationID}`).then(
      (response) => {
        console.log(response.data);
        let app = this.state.application;
        delete app[index];
        this.setState({ application: app });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  handleAccept = async (value, index) => {
    console.log(value);
    console.log(index);

    let userURL = "http://localhost:8080/api/myStore/updateRole/";

    await axios.put(userURL + `${value.userID}`).then(
      (response) => {
        console.log(response.data);
        this.handleDelete(value, index);
      },
      (error) => {
        console.log(error);
      }
    );
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
                    <div style={{ display: "inline-block" }}></div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Applicant</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollTable">
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Date</th>
                      <th>Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.application.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td>{value.applicationID}</td>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.email}</td>
                          <td>{value.position}</td>
                          <td>{value.date}</td>

                          <td>
                            <button
                              name="submit"
                              className="btn btn-info"
                              onClick={() => this.handleDetails(value)}
                            >
                              Details
                            </button>
                          </td>

                          <td>
                            <button
                              name="submit"
                              className="btn btn-primary mr-2"
                              onClick={() => this.handleAccept(value, index)}
                            >
                              Accept
                            </button>
                            <button
                              name="submit"
                              className="btn btn-danger mr-2"
                              onClick={() => this.handleDelete(value, index)}
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

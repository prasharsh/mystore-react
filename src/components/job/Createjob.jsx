import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CreateJobForm from "./CreateJobForm";
import axios from "axios";

export default class CreateJob extends Component {
  state = {
    selected: false,
    position: "",
    positionValid: false,
    positionInvalid: false,
    jobType: "Full-Time",
    shiftType: "AM",
    requirments: "",
    requirmentsValid: false,
    requirmentsInvalid: false,
    description: "",
    descriptionValid: false,
    descriptionInvalid: false,
  };

  handlePositionChange = (event) => {
    this.setState({ position: event.target.value });
    if (event.target.value !== "") {
      this.setState({ positionValid: true, positionInvalid: false });
    } else {
      this.setState({ positionValid: false, positionInvalid: true });
    }
  };

  handleJobTypeChange = (event) => {
    this.setState({ jobType: event.target.value });
  };

  handleShiftTypeChange = (event) => {
    this.setState({ shiftType: event.target.value });
  };

  handleRequirmentsChange = (event) => {
    this.setState({ requirments: event.target.value });
    if (event.target.value !== "") {
      this.setState({ requirmentsValid: true, requirmentsInvalid: false });
    } else {
      this.setState({ requirmentsValid: false, requirmentsInvalid: true });
    }
  };

  handleDescriptionChange = (event) => {
    this.setState({ description: event.target.value });
    if (event.target.value !== "") {
      this.setState({ descriptionValid: true, descriptionInvalid: false });
    } else {
      this.setState({ descriptionValid: false, descriptionInvalid: true });
    }
  };

  handleCreateJob = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    const { jobs } = this.props.location.state;
    const {
      position,
      jobType,
      shiftType,
      requirments,
      description,
    } = this.state;
    const id = jobs.length + 1;
    let job = {
      position: position,
      type: jobType,
      shift: shiftType,
      requirment: requirments,
      description: description,
    };

    let jobPostURL =
      "https://mystore-spring.herokuapp.com/api/jobPosts/insertJob";
    await axios.post(jobPostURL, job).then(
      (response) => {
        console.log(response.data);
        if (response.data) {
          this.setState({ selected: true });
          alert("Job Posting for: " + job.position + " has been added");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    if (this.state.selected) {
      this.props.history.push("/home/jobPosting");
    }
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div align="center">
                  <div style={{ display: "inline-block" }}></div>
                  <span className="p-2"></span>
                  <div style={{ display: "inline-block" }}>
                    <h4>Create Job</h4>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
            <CreateJobForm
              handleCreateJob={this.handleCreateJob}
              handlePositionChange={this.handlePositionChange}
              handleJobTypeChange={this.handleJobTypeChange}
              handleShiftTypeChange={this.handleShiftTypeChange}
              handleRequirmentsChange={this.handleRequirmentsChange}
              handleDescriptionChange={this.handleDescriptionChange}
              state={this.state}
            ></CreateJobForm>
          </div>
        </div>
      </div>
    );
  }
}

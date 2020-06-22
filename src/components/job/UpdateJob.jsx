import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UpdateJobForm from "./UpdateJobForm";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory({ forceRefresh: true });

export default class UpdateJob extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.location.state !== undefined) {
      this.setState({
        selectedJob: this.props.location.state.selectedJob,
        position: this.props.location.state.selectedJob.position,
        jobType: this.props.location.state.selectedJob.type,
        shiftType: this.props.location.state.selectedJob.shift,
        description: this.props.location.state.selectedJob.description,
        requirments: this.props.location.state.selectedJob.requirments,
      });
    }
  }

  state = {
    selectedJob: {},
    selected: false,
    position: "",
    positionValid: true,
    positionInvalid: false,
    jobType: "",
    shiftType: "",
    requirments: "",
    requirmentsValid: true,
    requirmentsInvalid: false,
    description: "",
    descriptionValid: true,
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

  handleUpdateJob = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const jobs = this.props.location.state.jobs;
    console.log(this.props.location.state);
    const {
      position,
      shiftType,
      jobType,
      description,
      requirments,
      positionValid,
      requirmentsValid,
      descriptionValid,
      selectedJob,
    } = this.state;
    const id = selectedJob.id;
    let job = {
      id: id,
      position: position,
      type: jobType,
      shift: shiftType,
      requirments: requirments,
      description: description,
    };
    if (positionValid && requirmentsValid && descriptionValid) {
      this.setState({ selected: true });
      if (
        selectedJob.position !== position &&
        selectedJob.type !== jobType &&
        selectedJob.shift !== shiftType &&
        selectedJob.description !== description &&
        selectedJob.requirments !== requirments
      ) {
        alert(`Job: ${id} Job Position ${position} has been updated`);
      }
    }
  };
  render() {
    console.log(this.state.selected);
    if (this.state.selected) {
      history.push("/home/jobPosting");
    } else {
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
                      <h4>Update Job</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <UpdateJobForm
                handleUpdateJob={this.handleUpdateJob}
                handlePositionChange={this.handlePositionChange}
                handleJobTypeChange={this.handleJobTypeChange}
                handleShiftTypeChange={this.handleShiftTypeChange}
                handleRequirmentsChange={this.handleRequirmentsChange}
                handleDescriptionChange={this.handleDescriptionChange}
                state={this.state}
                selectedJob={this.state.selectedJob}
              ></UpdateJobForm>
            </div>
          </div>
        </div>
      );
    }
  }
}

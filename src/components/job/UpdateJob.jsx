import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import UpdateJobForm from "./UpdateJobForm";
import createBrowserHistory from "history/createBrowserHistory";
import axios from "axios";

const history = createBrowserHistory({ forceRefresh: true });

export default class UpdateJob extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = async () => {
    const { selectedJob } = this.props.location.state;
    let jobPostURL = "http://localhost:8080/api/jobPosts/fetchByJobID/";

    await axios.get(jobPostURL + `${selectedJob.jobID}`).then(
      (response) => {
        console.log(response.data);
        this.setState(() => ({ selectedJob: response.data }));
        this.setState(() => ({
          position: response.data.position,
          jobType: response.data.type,
          shiftType: response.data.shift,
          description: response.data.description,
          requirments: response.data.requirment,
        }));
        console.log(response.data.requirment);
        console.log(this.state.requirments);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  state = {
    selectedJob: {},
    selected: false,
    position: "",
    positionValid: true,
    positionInvalid: false,
    jobType: "",
    shiftType: "",
    requirments: "",
    requirementsValid: true,
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

  handleRequirementsChange = (event) => {
    this.setState({ requirments: event.target.value });
    if (event.target.value !== "") {
      this.setState({ requirementsValid: true, requirementsInvalid: false });
    } else {
      this.setState({ requirementsValid: false, requirementsInvalid: true });
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

  handleUpdateJob = async (event) => {
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
      requirementsValid,
      descriptionValid,
      selectedJob,
    } = this.state;
    const jobID = selectedJob.jobID;
    let job = {
      jobID: jobID,
      position: position,
      type: jobType,
      shift: shiftType,
      requirment: requirments,
      description: description,
    };
    console.log("job");
    console.log(job);
    console.log(selectedJob);
    console.log("here" + positionValid + requirementsValid + descriptionValid);
    if (positionValid && requirementsValid && descriptionValid) {
      console.log("in first");
      console.log(selectedJob.position !== position);
      console.log(selectedJob.type !== jobType);
      console.log(selectedJob.shift !== shiftType);
      console.log(selectedJob.description !== description);
      console.log(selectedJob.requirment !== requirments);

      if (
        selectedJob.position !== position ||
        selectedJob.type !== jobType ||
        selectedJob.shift !== shiftType ||
        selectedJob.description !== description ||
        selectedJob.requirment !== requirments
      ) {
        console.log("before call");
        let jobPostURL = "http://localhost:8080/api/jobPosts/updateJob/";
        await axios.put(jobPostURL + `${job.jobID}`, job).then(
          (response) => {
            console.log(response.data);
            if (response.data) {
              this.setState({ selected: true });
              alert(`Job: ${job.jobID} has been updated`);
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
  };

  handleDelete = async () => {
    let jobPostURL = "http://localhost:8080/api/jobPosts/deleteJob/";
    const { selectedJob } = this.state;
    const jobID = selectedJob.jobID;
    console.log(jobID);

    await axios.delete(jobPostURL + `${jobID}`).then(
      (response) => {
        console.log(response.data);
        if (response.data) {
          this.setState({ selected: true });
          alert(`Job: ${jobID} has been deleted`);
        }
      },
      (error) => {
        console.log(error);
      }
    );
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
                handleRequirementsChange={this.handleRequirementsChange}
                handleDescriptionChange={this.handleDescriptionChange}
                handleDelete={this.handleDelete}
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

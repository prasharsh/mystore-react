import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Job.css";
import JobTable from "./JobTable";
import axios from "axios";

export default class Careers extends Component {
  state = {
    jobs: [],
    selectedJob: {},
    selected: false,
  };

  componentDidMount = async () => {
    let jobPostURL = "http://localhost:8080/api/jobPosts/fetchAll";

    await axios.get(jobPostURL).then(
      (response) => {
        console.log(response.data);
        this.setState(() => ({ jobs: response.data }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  handleOnClick = (job) => {
    //console.log(job);
    this.setState({ selectedJob: job });
    this.setState({ selected: true });
    const { selectedJob } = this.state;

    this.props.history.push({
      pathname: "/home/job-details",
      state: { job },
    });
  };
  render() {
    const { selectedJob } = this.state;
    // console.log(selectedJob);

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
                    <h4>Careers</h4>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
            <JobTable
              jobs={this.state.jobs}
              handleOnClick={this.handleOnClick}
            ></JobTable>
          </div>
        </div>
      </div>
    );
  }
}

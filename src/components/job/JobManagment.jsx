import React, { Component } from "react";
import "./Job.css";
import { Button } from "react-bootstrap";
import JobTable from "./JobTable";
import axios from "axios";

export default class JobManagment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      selectedJob: {},
      selected: false,
      createJobSelected: false,
      refresh: false,
    };
  }

  componentDidMount = async () => {
    let jobPostURL =
      "https://mystore-spring.herokuapp.com/api/jobPosts/fetchAll";

    await axios.get(jobPostURL).then(
      (response) => {
        this.setState(() => ({ jobs: response.data }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  async componentDidUpdate() {}

  handleOnClick = (job) => {
    this.setState({ selectedJob: job });
    this.setState({ selected: true });
  };

  handleCreateJob = () => {
    this.setState({ createJobSelected: true });
  };
  render() {
    const { selectedJob } = this.state;
    const { jobs } = this.state;
    if (this.state.selected) {
      this.props.history.push({
        pathname: "/home/update-job",
        state: { selectedJob },
      });
    }
    if (this.state.createJobSelected) {
      this.props.history.push({
        pathname: "/home/create-job",
        state: { jobs },
      });
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
                    <h4>Job Posting</h4>
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
          <div style={{ paddingTop: "1%" }}>
            <Button onClick={this.handleCreateJob}>Create Job</Button>
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./Job.css";
import { Table } from "react-bootstrap";

export default class JobTable extends Component {
  render() {
    return (
      <div className="scrollTable">
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Position</th>
              <th>Job Type</th>
              <th>Shift Type</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.jobs.map((job, index) => {
              return (
                <tr key={index}>
                  <td>{job.jobID}</td>
                  <td>{job.position}</td>
                  <td>{job.type}</td>
                  <td>{job.shift}</td>
                  <td>
                    <button
                      name="submit"
                      className="btn btn-info"
                      onClick={() => this.props.handleOnClick(job)}
                    >
                      Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

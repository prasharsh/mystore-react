import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./Job.css";

export default class JobDetails extends Component {
  state = {
    selected: false,
  };
  handleJobDetailsApply() {
    this.setState({ selected: true });
  }
  render() {
    const { selectedJob } = this.props.location.state;
    console.log(selectedJob);
    if (this.state.selected) {
      return (
        <Redirect
          push
          to={{
            pathname: "/application",
            state: { selectedJob },
          }}
        />
      );
    }
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
                      <h4>Job Details</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div className="NormalForm">
                <Form>
                  <Form.Row className="CreateJobRow">
                    <Form.Control
                      type="text"
                      readOnly
                      value={selectedJob.position}
                    />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Control
                      type="text"
                      readOnly
                      value={selectedJob.type}
                    />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Control
                      type="text"
                      readOnly
                      value={selectedJob.shift}
                    />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Label>Requirments</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      readOnly
                      value={selectedJob.requirments}
                    />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      readOnly
                      value={selectedJob.description}
                    />
                  </Form.Row>
                </Form>
                <div className="jobDetialsList">
                  <Button
                    onClick={() => this.handleJobDetailsApply()}
                    size="lg"
                  >
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

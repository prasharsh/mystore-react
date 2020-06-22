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
    console.log(this.props);

    const { job } = this.props.location.state;
    console.log(job);
    if (this.state.selected) {
      this.props.history.push({
        pathname: "/application",
        state: { job },
      });
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
                    <Form.Control type="text" readOnly value={job.position} />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Control type="text" readOnly value={job.type} />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Control type="text" readOnly value={job.shift} />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Label>Requirments</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      readOnly
                      value={job.requirments}
                    />
                  </Form.Row>

                  <Form.Row className="CreateJobRow">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      readOnly
                      value={job.description}
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

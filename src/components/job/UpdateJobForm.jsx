import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Job.css";

export default class UpdateJobForm extends Component {
  render() {
    console.log(this.props.state.type);
    return (
      <div className="NormalForm">
        <Form onSubmit={this.props.handleUpdateJob}>
          <Form.Row className="CreateJobRow">
            <Form.Label>Position:</Form.Label>

            <Form.Control
              type="text"
              placeholder="Position"
              onChange={this.props.handlePositionChange}
              isInvalid={this.props.state.positionInvalid}
              isValid={this.props.state.positionValid}
              value={this.props.selectedJob.position}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter A Position
            </Form.Control.Feedback>
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Job Type:</Form.Label>
            <Form.Control
              as="select"
              onChange={this.props.handleJobTypeChange}
              value={this.props.selectedJob.type}
            >
              <option>Full-Time</option>
              <option>Part-Time</option>
              <option>Casual</option>
            </Form.Control>
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Shift Type:</Form.Label>
            <Form.Control
              as="select"
              onChange={this.props.handleShiftTypeChange}
              value={this.props.selectedJob.shift}
            >
              <option>AM</option>
              <option>PM</option>
              <option>Day</option>
              <option>Night</option>
              <option>Not Specified</option>
            </Form.Control>
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Requirments</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={this.props.handleRequirmentsChange}
              isInvalid={this.props.state.requirmentsInvalid}
              isValid={this.props.state.requirmentsValid}
              value={this.props.selectedJob.requirments}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Requirments
            </Form.Control.Feedback>
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={this.props.handleDescriptionChange}
              isInvalid={this.props.state.descriptionInvalid}
              isValid={this.props.state.descriptionValid}
              value={this.props.selectedJob.description}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter A Description
            </Form.Control.Feedback>
          </Form.Row>

          <Button type="submit">Update Job</Button>
        </Form>
      </div>
    );
  }
}

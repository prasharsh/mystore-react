import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import "./Job.css";
export default class UpdateJobForm extends Component {
  render() {
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
              value={this.props.state.position}
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
              value={this.props.state.jobType}
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
              value={this.props.state.shiftType}
            >
              <option>AM</option>
              <option>PM</option>
              <option>Day</option>
              <option>Night</option>
              <option>Not Specified</option>
            </Form.Control>
          </Form.Row>
          <Form.Row className="CreateJobRow">
            <Form.Label>Requirements</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              onChange={this.props.handleRequirementsChange}
              isInvalid={this.props.state.requirementsInvalid}
              isValid={this.props.state.requirementsValid}
              value={this.props.state.requirments}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter Requirements
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
              value={this.props.state.description}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter A Description
            </Form.Control.Feedback>
          </Form.Row>
          <Button type="submit">Update Job</Button>
          {"   "}
          <Button variant="danger" onClick={() => this.props.handleDelete()}>
            Delete
          </Button>
        </Form>
      </div>
    );
  }
}

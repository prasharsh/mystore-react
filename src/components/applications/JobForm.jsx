import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export default class JobForm extends Component {
  render() {
    return (
      <div className="NormalForm">
        <Form>
          <Form.Row className="CreateJobRow">
            <Form.Control
              type="text"
              readOnly
              value={this.props.value.position}
            />
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Control type="text" readOnly value={this.props.value.type} />
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Control type="text" readOnly value={this.props.value.shift} />
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Requirments</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              readOnly
              value={this.props.value.requirments}
            />
          </Form.Row>

          <Form.Row className="CreateJobRow">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              readOnly
              value={this.props.value.description}
            />
          </Form.Row>
        </Form>
      </div>
    );
  }
}

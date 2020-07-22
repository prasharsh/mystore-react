import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

export default class ApplicationDetailsForm extends Component {
  render() {
    console.log(this.props.value);
    return (
      <div className="ApplicantForm">
        <Form>
          <Form.Row>
            <Col s="auto">
              <Form.Group controlId="formGroupFirstName">
                <Form.Control
                  type="text"
                  readOnly
                  className="mb-2"
                  value={this.props.value.firstName}
                />
              </Form.Group>
            </Col>
            <Col s="auto">
              <Form.Group controlId="formGroupLastName">
                <Form.Control
                  type="text"
                  readOnly
                  className="mb-2"
                  value={this.props.value.lastName}
                />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupEmail" as={Col}>
              <Form.Control
                type="text"
                readOnly
                required
                value={this.props.value.email}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupAddress" as={Col}>
              <Form.Control
                type="text"
                readOnly
                required
                value={this.props.value.address}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupPhoneNumber" as={Col}>
              <Form.Control
                type="text"
                readOnly
                required
                value={this.props.value.phoneNumber}
              />
            </Form.Group>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

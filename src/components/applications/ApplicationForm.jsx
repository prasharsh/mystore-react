import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import "./Application.css";

export default class ApplicationForm extends Component {
  render() {
    return (
      <div className="NormalForm">
        <Form onSubmit={this.props.handleAppSubmit}>
          <Form.Row>
            <Col s="auto">
              <Form.Group controlId="formGroupFirstName">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  onChange={this.props.handleFirstNameChange}
                  isInvalid={this.props.state.firstNameInvalid}
                  isValid={this.props.state.firstNameValid}
                  required
                  className="mb-2"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter First Name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col s="auto">
              <Form.Group controlId="formGroupLastName">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  onChange={this.props.handleLastNameChange}
                  isInvalid={this.props.state.lastNameInvalid}
                  isValid={this.props.state.lastNameValid}
                  required
                  className="mb-2"
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter Last Name
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupEmail" as={Col}>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={this.props.handleEmailChange}
                isInvalid={this.props.state.emailInvalid}
                isValid={this.props.state.emailValid}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Email Example: email@dal.ca
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupAddress" as={Col}>
              <Form.Control
                type="text"
                placeholder="Address"
                onChange={this.props.handleAddressChange}
                isInvalid={this.props.state.addressInvalid}
                isValid={this.props.state.addressValid}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Address
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGroupPhoneNumber" as={Col}>
              <Form.Control
                type="text"
                placeholder="Phone Number: (xxx)-xxx-xxxx"
                onChange={this.props.handlePhoneNumber}
                isInvalid={this.props.state.phoneNumberInvalid}
                isValid={this.props.state.phoneNumberValid}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Phone Numer Example: (xxx)-xxx-xxxx
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formGroupFile" as={Col}>
              <Form.File
                className="position-relative"
                label="Optional Resume File Uploader"
                feedbackTooltip
              />
            </Form.Group>
          </Form.Row>

          <Button type="submit" variant="dark" size="lg">
            Apply
          </Button>
        </Form>
      </div>
    );
  }
}

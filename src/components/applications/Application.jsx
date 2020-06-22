import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm";
import { Redirect } from "react-router-dom";

export default class Application extends Component {
  state = {
    firstName: "",
    lastName: "",
    emai: "",
    address: "",
    phoneNumber: "",
    firstNameInvalid: false,
    firstNameValid: false,
    lastNameInvalid: false,
    lastNameValid: false,
    emailInvalid: false,
    emailValid: false,
    addressInvalid: false,
    addressValid: false,
    phoneNumberInvalid: false,
    phoneNumberValid: false,
    applied: false,
  };
  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
      firstNameValid: false,
      firstNameInvalid: false,
    });
    if (/^[a-zA-Z]+$/.test(event.target.value)) {
      this.setState({ firstNameValid: true, firstNameInvalid: false });
    } else {
      this.setState({ firstNameValid: false, firstNameInvalid: true });
    }
  };
  handleLastNameChange = (event) => {
    this.setState({ lastName: event.target.value });
    if (/^[a-zA-Z]+$/.test(event.target.value)) {
      this.setState({ lastNameValid: true, lastNameInvalid: false });
    } else {
      this.setState({ lastNameValid: false, lastNameInvalid: true });
    }
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
    if (
      /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(
        event.target.value
      )
    ) {
      this.setState({ emailValid: true, emailInvalid: false });
    } else {
      this.setState({ emailValid: false, emailInvalid: true });
    }
  };
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
    if (/^[0-9 ,\-a-zA-Z]+$/.test(event.target.value)) {
      this.setState({ addressValid: true, addressInvalid: false });
    } else {
      this.setState({ addressValid: false, addressInvalid: true });
    }
  };
  handlePhoneNumber = (event) => {
    this.setState({ phoneNumber: event.target.value });
    if (
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        event.target.value
      )
    ) {
      this.setState({ phoneNumberValid: true, phoneNumberInvalid: false });
    } else {
      this.setState({ phoneNumberValid: false, phoneNumberInvalid: true });
    }
  };
  handleAppSubmit = (event) => {
    const {
      firstNameValid,
      lastNameValid,
      emailValid,
      addressValid,
      phoneNumberValid,
    } = this.state;
    if (
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      addressValid &&
      phoneNumberValid
    ) {
      this.setState({ applied: true });
      alert("Thank you for your application");
    }
    event.preventDefault();
    event.stopPropagation();
    this.props.history.push("/home");
  };

  render() {
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
                    <h4>Application</h4>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
            <ApplicationForm
              handleFirstNameChange={this.handleFirstNameChange}
              handleLastNameChange={this.handleLastNameChange}
              handleEmailChange={this.handleEmailChange}
              handleAddressChange={this.handleAddressChange}
              handlePhoneNumber={this.handlePhoneNumber}
              handleAppSubmit={this.handleAppSubmit}
              state={this.state}
            ></ApplicationForm>
          </div>
        </div>
      </div>
    );
  }
}

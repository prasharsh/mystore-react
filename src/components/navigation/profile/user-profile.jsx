import React, { Component } from "react";
import ProfileImg from "./profile.svg";
import "../../login/login.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Container,
  FormFeedback,
} from "reactstrap";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Suraj xyz",
      firstName: "Suraj",
      lastName: "Sharma",
      email: "abc@gmail.com",
      newPass: "",
      validate: {
        emailState: "",
        passwordState: "",
      },
    };
  }
  validatePassword = (event) => {
    const { validate } = this.state;
    if (event.target.value.length > 6) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  };
  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };

  validateEmail = (event) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;
    if (emailRex.test(event.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  };

  handleUpdate = () => {
    if (this.state.email.length === 0) {
      alert("Please enter the email");
    } else if (this.state.email.length > 0) {
      if (this.state.validate.emailState === "has-success") {
        alert("Profile updated");
      } else if (this.state.validate.emailState === "has-danger") {
        alert("Please provide valid email");
      } else {
        alert("Profile updated");
      }
    }
  };

  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div align="center">
                  <div style={{ display: "inline-block" }}>
                    <img className="profile-img" src={ProfileImg}></img>{" "}
                  </div>
                  <span className="p-2"></span>
                  <div style={{ display: "inline-block" }}>
                    <h4>Your Profile</h4>
                    <hr></hr>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Container className="Profile">
                  <form>
                    <div className="form-group row">
                      <label for="username" className="col-4 col-form-label">
                        User Name
                      </label>
                      <div className="col-8">
                        <input
                          id="username"
                          name="userName"
                          placeholder="Username"
                          className="form-control here"
                          required="required"
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          value={this.state.userName}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="name" className="col-4 col-form-label">
                        First Name
                      </label>
                      <div className="col-8">
                        <input
                          id="name"
                          name="firstName"
                          placeholder="First Name"
                          className="form-control here"
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          value={this.state.firstName}
                        ></input>
                      </div>
                    </div>
                    <div className="form-group row">
                      <label for="lastname" className="col-4 col-form-label">
                        Last Name
                      </label>
                      <div className="col-8">
                        <input
                          id="lastname"
                          name="lastName"
                          placeholder="Last Name"
                          className="form-control here"
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                          value={this.state.lastName}
                        ></input>
                      </div>
                    </div>
                    <FormGroup className="form-group row">
                      <label for="email" className="col-4 col-form-label">
                        Email*
                      </label>
                      <div className="col-8">
                        <Input
                          id="email"
                          name="email"
                          placeholder="Email"
                          className="form-control here"
                          required="required"
                          type="text"
                          onChange={(e) => {
                            this.handleChange(e);
                            this.validateEmail(e);
                          }}
                          valid={
                            this.state.validate.emailState === "has-success"
                          }
                          invalid={
                            this.state.validate.emailState === "has-danger"
                          }
                          value={this.state.email}
                        ></Input>
                        <FormFeedback valid>Valid email</FormFeedback>
                        <FormFeedback>Please enter a valid email</FormFeedback>
                      </div>
                    </FormGroup>
                    <FormGroup className="form-group row">
                      <label for="newpass" className="col-4 col-form-label">
                        New Password
                      </label>
                      <div className="col-8">
                        <Input
                          id="newpass"
                          name="newPass"
                          placeholder="New Password"
                          className="form-control here"
                          type="text"
                          valid={
                            this.state.validate.passwordState === "has-success"
                          }
                          invalid={
                            this.state.validate.passwordState === "has-danger"
                          }
                          onChange={(e) => {
                            this.handleChange(e);
                            this.validatePassword(e);
                          }}
                          name="newPass"
                          value={this.state.newPass}
                        ></Input>
                        <FormFeedback valid>Valid password</FormFeedback>
                        <FormFeedback>
                          Please enter a passoword of length >6
                        </FormFeedback>
                      </div>
                    </FormGroup>
                    <br></br>
                    <div className="form-group row">
                      <div className="offset-2 col-9">
                        <button
                          onClick={this.handleUpdate}
                          name="submit"
                          className="btn btn-dark"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;

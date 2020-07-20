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
      id: "",
      userName: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      newPass: "",
      validate: {
        emailState: "",
        passwordState: "",
        phoneState: "",
      },
    };
  }

  componentDidMount() {
    const url =
      "http://localhost:8080/api/myStore/fetchUserProfile/" +
      localStorage.getItem("id");

    fetch(url)
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            id: result.id,
            userName: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            phone: result.phone,
            email: result.username,
            newPass: result.password,
          });
          console.log(result);
        },

        (error) => {
          console.log(error);
        }
      );
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

  validatePhone = (event) => {
    const { validate } = this.state;
    if (event.target.value.length > 6) {
      validate.phoneState = "has-success";
    } else {
      validate.phoneState = "has-danger";
    }
    this.setState({ validate });
  };

  updateProfile() {
    let user = {
      id: localStorage.getItem("id"),
      username: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      password: this.state.newPass,
    };
    let role = "";
    fetch("http://localhost:8080/api/myStore/updateProfile", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        response.json();
        alert("Profile successfully updated !");
      })
      .then((data) => {
        console.log(data);
      });
  }
  handleUpdate = () => {
    if (this.state.email.length === 0) {
      alert("Please enter the email");
    } else if (this.state.email.length > 0) {
      if (this.state.validate.emailState === "has-danger") {
        alert("Please provide valid email");
      } else {
        this.updateProfile();
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
                          readOnly
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
                          readOnly
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
                      <label for="email" className="col-4 col-form-label">
                        Phone
                      </label>
                      <div className="col-8">
                        <Input
                          type="text"
                          placeholder="Phone"
                          name="phone"
                          value={this.state.phone}
                          onChange={(e) => {
                            this.handleChange(e);
                            this.validatePhone(e);
                          }}
                          required
                          valid={
                            this.state.validate.phoneState === "has-success"
                          }
                          invalid={
                            this.state.validate.phoneState === "has-danger"
                          }
                        ></Input>
                        <FormFeedback valid>Valid phone number</FormFeedback>
                        <FormFeedback>Please enter phone number</FormFeedback>
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
                          type="password"
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
                  </form>
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

import React, { Component } from "react";
import "./login.css";
import SignUpImage from "./sign-up.svg";
import { Link } from "react-router-dom";
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
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fname: "",
      lname: "",
      confirmPassword: "",
      validate: {
        emailState: "",
        fnameState: "",
        lnameState: "",
        passwordState: "",
        passwordMatchState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
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
    let { validate } = this.state;
    if (emailRex.test(event.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  };

  validateFname = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 0) {
      validate.fnameState = "has-success";
    } else {
      validate.fnameState = "has-danger";
    }
    this.setState({ validate });
  };

  validateLname = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 0) {
      validate.lnameState = "has-success";
    } else {
      validate.lnameState = "has-danger";
    }
    this.setState({ validate });
  };

  validatePassword = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 6) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  };

  validateConfirmPassword = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 6) {
      validate.passwordMatchState = "has-success";
    } else {
      validate.passwordMatchState = "has-danger";
    }
    this.setState({ validate });

    this.setState({ validate });
  };
  // https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

  render() {
    return (
      <Container className="Registration">
        <Form className="form login-form">
          <h1>
            <span className="font-weight-bold">My Store</span>
          </h1>
          <img className="cut-img" src={SignUpImage}></img>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateEmail(e);
                }}
                required
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
              ></Input>
              <FormFeedback valid>Valid email</FormFeedback>
              <FormFeedback>Please enter a valid email</FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>First name</Label>
              <Input
                type="text"
                placeholder="First Name"
                name="fname"
                value={this.state.fname}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateFname(e);
                }}
                required
                valid={this.state.validate.fnameState === "has-success"}
                invalid={this.state.validate.fnameState === "has-danger"}
              ></Input>
              <FormFeedback valid>Valid first name</FormFeedback>
              <FormFeedback>Please enter first name</FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Last name</Label>
              <Input
                type="text"
                placeholder="Last Name"
                name="lname"
                value={this.state.lname}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateLname(e);
                }}
                required
                valid={this.state.validate.lnameState === "has-success"}
                invalid={this.state.validate.lnameState === "has-danger"}
              ></Input>
              <FormFeedback valid>Valid last name</FormFeedback>
              <FormFeedback>Please enter last name</FormFeedback>
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                valid={this.state.validate.passwordState === "has-success"}
                invalid={this.state.validate.passwordState === "has-danger"}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validatePassword(e);
                }}
                required
              ></Input>
              <FormFeedback valid>Valid password</FormFeedback>
              <FormFeedback>
                Please enter a passoword of length &gt;6
              </FormFeedback>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                type="password"
                placeholder="Password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                valid={this.state.validate.passwordMatchState === "has-success"}
                invalid={
                  this.state.validate.passwordMatchState === "has-danger"
                }
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateConfirmPassword(e);
                }}
                required
              ></Input>
              <FormFeedback valid>Valid password</FormFeedback>
              <FormFeedback>
                Please enter a passoword of length &gt;6
              </FormFeedback>
            </FormGroup>
          </Col>

          <Button
            className="btn-lg btn-dark btn-block"
            onClick={this.handleSubmit}
          >
            Sign Up
          </Button>
          <div className="text-center pt-2">
            <Link to="/">Login</Link>
            <span className="p-2">|</span>
            <Link to="/forgot-password">Forgot password?</Link>
          </div>
        </Form>
      </Container>
    );
  }

  handleSubmit = () => {
    if (
      this.state.validate.emailState === "has-success" &&
      this.state.validate.fnameState === "has-success" &&
      this.state.validate.lnameState === "has-success" &&
      this.state.validate.passwordState === "has-success" &&
      this.state.validate.passwordMatchState === "has-success"
    ) {
      if (this.state.confirmPassword === this.state.password) {
        alert("User Registerd succesfully!");
        this.props.history.push("/");
      } else {
        alert("Password and confirm password mismatch ");
      }
    } else {
      alert("Please provide all details");
    }
  };
}

export default Registration;

import React, { Component } from "react";
import "./login.css";

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
import { Link } from "react-router-dom";
import LoginImage from "./login.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.isAuthed);
    this.state = {
      email: "",
      password: "",
      validate: {
        emailState: "",
        passwordState: "",
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
    const { validate } = this.state;
    if (emailRex.test(event.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }
    this.setState({ validate });
  };
  //https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

  validatePassword = (event) => {
    const { validate } = this.state;
    if (event.target.value.length > 6) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  };
  render() {
    return (
      <Container className="App">
        <Form className="form login-form">
          <h1>
            <span className="font-weight-bold">My Store</span>
          </h1>
          <img className="cut-img" src={LoginImage}></img>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateEmail(e);
                }}
                placeholder="Email"
                name="email"
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                required
              ></Input>
              <FormFeedback valid>Valid email</FormFeedback>
              <FormFeedback>Please enter a valid email</FormFeedback>
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
          <Button
            onClick={this.handleSubmit}
            className="btn-lg btn-dark btn-block"
          >
            Login
          </Button>
        </Form>
        <div className="text-center pt-2">
          <Link to="/sign-up">Sign up</Link>
          <span className="p-2">|</span>
          <Link to="/forgot-password">Forgot password?</Link>
        </div>
      </Container>
    );
  }

  handleSubmit = () => {
    console.log(this.state);

    if (
      this.state.validate.emailState === "has-success" &&
      this.state.validate.passwordState === "has-success"
    ) {
      this.props.updateAuth(true);
      localStorage.setItem("auth", "true");

      if(this.state.email === 'parth.panchal@mcd.ca' && this.state.password !== ""){
        localStorage.setItem("role","crew");
        this.props.history.push("/home/");
      }
      else if (this.state.email === 'meghan@mcd.ca' && this.state.password !== ""){
        localStorage.setItem("role","manager");
        this.props.history.push("/home/");
      }
    }
  };
}

export default Login;

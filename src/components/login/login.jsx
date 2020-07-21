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
      role: "",
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
    if (
      this.state.validate.emailState === "has-success" &&
      this.state.validate.passwordState === "has-success"
    ) {
      console.log(this.state);
      let user = {
        username: this.state.email,
        password: this.state.password,
      };
      let role = "";
      fetch("http://localhost:8080/api/myStore/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("role", data.userRole);
          localStorage.setItem("id", data.id);
          localStorage.setItem("auth", "true");

          if (localStorage.getItem("role") !== "null") {
            localStorage.setItem("auth", "true");
            console.log(
              localStorage.getItem("role") +
                "......." +
                localStorage.getItem("auth")
            );
            console.log("inside if role is valid");
            this.props.updateAuth(true);
            this.props.history.push("/home");
            //window.location.reload();
          } else {
            alert(data.message);
            window.location.reload();
          }
        });
    }
  };
}

export default Login;

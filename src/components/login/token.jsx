import React, { Component } from "react";
import "./login.css";
import TokenImage from "./token.svg";
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
class Token extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      password: "",
      confirmPassword: "",
      validate: {
        tokenState: "",
        passwordState: "",
        passwordMatchState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }
  validatePassword = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 6) {
      validate.passwordState = "has-success";
    } else {
      validate.passwordState = "has-danger";
    }
    this.setState({ validate });
  };

  validateToken = (event) => {
    let { validate } = this.state;

    if (event.target.value.length > 4) {
      validate.tokenState = "has-success";
    } else {
      validate.tokenState = "has-danger";
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
  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };
  // https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

  render() {
    return (
      <Container className="Token">
        <Form className="form login-form">
          <h1>
            <span className="font-weight-bold">My Store</span>
          </h1>
          <img className="cut-img" src={TokenImage}></img>
          <Col>
            <FormGroup>
              <Label>Token</Label>
              <Input
                type="text"
                placeholder="Token"
                name="token"
                value={this.state.token}
                valid={this.state.validate.tokenState === "has-success"}
                invalid={this.state.validate.tokenState === "has-danger"}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateToken(e);
                }}
                required
              ></Input>
              <FormFeedback valid>Valid Token</FormFeedback>
              <FormFeedback>Please enter a token of length >4</FormFeedback>
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
              <FormFeedback>Please enter a passoword of length >6</FormFeedback>
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
              <FormFeedback>Please enter a passoword of length >6</FormFeedback>
            </FormGroup>
          </Col>
          <Button
            className="btn-lg btn-dark btn-block"
            onClick={this.handleSubmit}
          >
            Change
          </Button>
        </Form>
      </Container>
    );
  }

  handleSubmit = () => {
    if (
      this.state.validate.tokenState === "has-success" &&
      this.state.validate.passwordState === "has-success" &&
      this.state.validate.passwordMatchState === "has-success"
    ) {
      if (this.state.confirmPassword === this.state.password) {
        alert("Password Changed  succesfully!");
        this.props.history.push("/");
      } else {
        alert("Password and confirm password mismatch ");
      }
    }
  };
}

export default Token;

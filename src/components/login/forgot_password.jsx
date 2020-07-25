import React, { Component } from "react";
import "./login.css";
import ForgotPasswordImg from "./forgot_password.svg";
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
class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      validate: {
        emailState: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  triggerEmail() {
    const { email } = this.state;
    // console.log(email);
    fetch(
      `https://mystore-spring.herokuapp.com/api/myStore/resetPassword/${email}`
    )
      .then((response) => response.json())
      .then((res) => {
        // console.log(res);
        alert(res);
        if (res === "Please check your email for the token sent!!") {
          this.props.history.push("/token");
        } else {
          this.setState({ email: "" });
        }
      });
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
  // https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

  render() {
    return (
      <Container className="ForgotPassword">
        <Form className="form login-form">
          <h1>
            <span className="font-weight-bold">My Store</span>
          </h1>
          <img className="cut-img" src={ForgotPasswordImg}></img>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                onChange={(e) => {
                  this.handleChange(e);
                  this.validateEmail(e);
                }}
                placeholder="Email"
                valid={this.state.validate.emailState === "has-success"}
                invalid={this.state.validate.emailState === "has-danger"}
                required
              ></Input>
              <FormFeedback valid>Valid email</FormFeedback>
              <FormFeedback>Please enter a valid email</FormFeedback>
            </FormGroup>
          </Col>
          <Button
            className="btn-lg btn-dark btn-block"
            onClick={this.handleSubmit}
          >
            Change Passoword
          </Button>
          <div className="text-center pt-2">
            <Link to="/">Login</Link>
            <span className="p-2">|</span>
            <Link to="/sign-up">Sign Up</Link>
          </div>
        </Form>
      </Container>
    );
  }
  handleSubmit = () => {
    if (this.state.validate.emailState === "has-success") {
      this.triggerEmail();
    }
  };
}

export default ForgotPassword;

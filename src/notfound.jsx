import React, { Component } from "react";
import NotFoundImage from "./notfound.svg";
import "./components/login/login.css";
class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <span> Page Not Found </span>
        <img className="later-img" src={NotFoundImage}></img>
      </div>
    );
  }
}

export default NotFound;

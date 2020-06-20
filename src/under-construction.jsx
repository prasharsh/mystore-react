import React, { Component } from "react";
import ConstuctionImg from "./construction.svg";
import "./components/login/login.css";
class UnderConstruction extends Component {
  state = {};
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <span> Page Under Construction</span>
        <img className="later-img " src={ConstuctionImg}></img>
      </div>
    );
  }
}

export default UnderConstruction;

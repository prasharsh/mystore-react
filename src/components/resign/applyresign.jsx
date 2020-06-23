import React, { Component } from "react";
import "./resign.css";

import ComplaintImage from "../complaints/complaint.svg";

import "../login/login.css";

import { Button, Container, Form } from "react-bootstrap";

class ApplyResign extends Component {
    constructor() {
        super();
       
    this.state = {
       
        firstname:'',
        lastname:'',
        reason:'',
        manager:'',
        fields: {},
        errors: {}

    }
    this.handleChange=this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this)
}
handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
        fields["firstname"] = "";
        fields["lastname"] = "";
        fields["reason"] = "";
        fields["manager"] = "";
        this.setState({fields:fields});
        alert("Resignation Successfull");
        this.props.history.push("/home/resign")
    }

  }
  validateForm(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    //Password
    if(!fields["firstname"]){
        formIsValid = false;
        errors["firstname"] = "First name cannot be empty";
     }
     if(!fields["lastname"]){
        formIsValid = false;
        errors["lastname"] = "Last name cannot be empty";
     }
     if(!fields["reason"]){
        formIsValid = false;
        errors["reason"] = "State atlease one reason";
     }
     if(!fields["manager"]){
        formIsValid = false;
        errors["manager"] = "Please enter your manager name";
     }
     this.setState({
        errors: errors
      });
      return formIsValid;
    }
    
    render() {
      return (
          <div>
        <div className="row-name">
        <div className="col-md-12">
          <div align="center">
            <div style={{ display: "inline-block" }}>
              <img className="profile-img" src={ComplaintImage}></img>{" "}
            </div>
            <span className="p-2"></span>
            <div style={{ display: "inline-block" }}>
              <h4>Resign </h4>
              <hr></hr>
            </div>
          </div>
          </div>
      </div>
     
      <Form className="userResignationForm">
          <br></br>
          <h5>Employee Separation Form </h5>
          <br></br>
  <form method="post"  name="userResignationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>First Name</label>
        <input type="text" name="firstname" value={this.state.fields.firstname} onChange={this.handleChange} placeholder="James "/>
        <div className="errorMsg">{this.state.errors.firstname}</div>
  
        <label>Last Name</label>
        <input type="text" name="lastname" value={this.state.fields.lastname} onChange={this.handleChange} placeholder="Blunt"/>
        <div className="errorMsg">{this.state.errors.lastname}</div>

        <label>Reason</label>
        <input type="text" name="reason" value={this.state.fields.reason} onChange={this.handleChange} placeholder="Re-locating to another province"/>
        <div className="errorMsg">{this.state.errors.reason}</div>

        <label>Manager</label>
        <input type="text" name="manager" value={this.state.fields.manager} onChange={this.handleChange}placeholder="Chris Luke" />
        <div className="errorMsg">{this.state.errors.manager}</div>
        <br></br>
        <input type="submit" className="btn btn-success "  value="Resign" />
        </form>
        <br></br>
          <h6>Please read the separation terms and policies </h6>
          <br></br>
        </Form>
       
        </div>
      );
       }
   }
   export default ApplyResign;
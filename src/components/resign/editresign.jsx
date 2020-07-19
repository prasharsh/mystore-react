import React, { Component } from "react";
import "./resign.css";

import ComplaintImage from "../complaints/complaint.svg";

import "../login/login.css";

import { Button, Container, Form } from "react-bootstrap";

class EditResign extends Component {
    constructor() {
        super();
       
    this.state = {
      resign:[],
        empid:'',
        reason:'',
        fields: {},
        errors: {}

    }
    this.handleChange=this.handleChange.bind(this);
    this.submitResignationForm = this.submitResignationForm.bind(this)
}
handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });

  }
  submitResignationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
        let fields = {};
         fields["reason"] = "";
        this.setState({fields:fields});
        
        const result= this.updateresignation();
        this.props.history.push("/home/resign")
    }

  }

  validateForm(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

     if(!fields["reason"]){
        formIsValid = false;
        errors["reason"] = "State atlease one reason";
     }

     this.setState({
        errors: errors
      });
      return formIsValid;
    }
    componentDidMount(){
      const {resign} =this.state.resign
         const empid=localStorage.getItem("id");
        fetch(`http://localhost:8080/api/myStore/resignation/edit/${empid}`)
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState(
                {
    
                    resign: responseJson,
    
                },
            );
        })
        
      }

  
  updateresignation() {
    let resignation = {
      empid:localStorage.getItem("id"),
      reason: this.state.fields.reason,
      rid: this.state.resign.rid,
      status:'PENDING'
    };
    const empid = localStorage.getItem("id");
    fetch(`http://localhost:8080/api/myStore/resignation/update/${empid}`, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(resignation),
    })
    .then(function(response){return response.json();})
    .then(function(data)
    {const items=data;
    console.log(items)
      if(items==="Success")
      alert("Successfully updated your resigntion ");
      else
      alert("Failed to update ");
    });
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
        <label>EMPID</label>
        <input type="text" readOnly name="EMPID" value={localStorage.getItem("id")}></input>

        <label>Reason</label>
        <input type="text" name="reason" value={this.state.fields.reason} onChange={this.handleChange}placeholder="Enter your reason" />
        <div className="errorMsg">{this.state.errors.reason}</div>
        <br></br>
        <input type="submit" onClick={this.submitResignationForm}  className="btn btn-success "  value="Resign" />
        </form>
        <br></br>
          <h6>Please read the separation terms and policies </h6>
          <br></br>
        </Form>
       
        </div>
      );
       }
      }
   
   export default EditResign;
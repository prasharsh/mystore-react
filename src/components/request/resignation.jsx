import React, { Component } from 'react';
import {Button,Table } from "react-bootstrap";
import ComplaintImage from "../complaints/complaint.svg";
import "./request.css";
class AcceptResignation extends Component {
  constructor(props){
   super(props);
  
 // this would be service
 this.state = {
    request:[{EmpID:"JP193",Name:"James",Reason:"Am re-locating to another province"}
    ,{EmpID:"LN718",Name:"Rosen",Reason:"Looking for full time opportunities."},
    {EmpID:"AZ729",Name:"Anna",Reason:"Leaving to pursue  higher studies"},
    {EmpID:"L3718",Name:"Jared",Reason:"Looking for Better opportunities"}]
}
this.handleDelete=this.handleDelete.bind(this);
  }

handleDelete(index) {
  console.log(index.EmpID);
  this.setState({
    request: this.state.request.filter(
      (item) => item.EmpID !== index.EmpID
    ),
  
  });
  alert("You are about to take action, please confirm.");
}
  renderTable(){
    const {request} = this.state;
    if( request){

    return (
        
      request.map((index) => 
  <tbody>    
        <tr>
        <td>{index.EmpID}</td>
        <td>{index.Name}</td>
        <td>{index.Reason}</td>
        <td><Button className="btn btn-primary  mr-5" onClick={() => this.handleDelete(index)}> Accept</Button>
        <Button className="btn btn-primary mr-5" onClick={() => this.handleDelete(index)}> Reject</Button></td>   
        </tr>
        </tbody> 
    ));
  }
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
                  <h4> Pending Resignations</h4>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        
                
               
                <br></br>
                <br></br>
                <div>
                <Table classname="resign">
                <thead>
                <tr>
                <th> Employee No.</th>
            <th>Name</th>
            <th>Reason</th>
            <th>Action</th>
                </tr>
                </thead>

                {this.renderTable()}
                </Table>
              </div>
              </div>

          );
      }
    }
    export default AcceptResignation;
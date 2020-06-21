import React, { Component } from "react";
import {Table, Form, Button} from 'react-bootstrap';

export default class Schedule1 extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { confirmation:false };
  }

  handleSubmit(event){
    this.setState({confirmation:true});
  }
    render() {
 return (
   
<div className="schedule1-component m-4 p-4">
{
  this.state.confirmation && <span style={{ color: 'blue' }} > schedule(s) broadcasted !</span> }

<h2 id="crewDashBoardTitle">Schedule Suggestion 1</h2>
 <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Employee</th>
      <th>Monday</th>
      <th>Tuesday</th>
      <th>Wednesday</th>
      <th>Thursday</th>
      <th>Friday</th>
      <th>Saturday</th>
      <th>Sunday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Schoefield Dawson</td>
      <td> 2.00pm-7.00pm</td>
      <td> N/A </td>
      <td> N/A </td>
      <td> 7.00pm-12.00am </td>
      <td> N/A </td>
      <td> N/A </td>
      <td> 8.00pm-2.00am </td>
    </tr>
    
    <tr>
      <td>Brian Boone</td>
      <td> 7.10pm-12.00pm</td>
      <td> N/A </td>
      <td> 2.00pm-7.00pm </td>
      <td> N/A </td>
      <td> N/A </td>
      <td> N/A </td>
      <td> N/A </td>
    </tr>
    
    
  </tbody>
 </Table> 
 <Button variant="primary" type="submit" onClick={this.handleSubmit}>
    Confirm Schedule
  </Button>
</div>
);
    }
}
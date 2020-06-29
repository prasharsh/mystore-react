import React, { Component } from "react";
import { Form, Col, Row, Button, Radio } from "react-bootstrap";
import "./Application.css";

export default class ScheduleInterview extends Component {
  render() {
    return (
        <div className="SceduleInterview">
       <Form.Group>
        
       <Form.Label>Type of Interview </Form.Label>
        <Form.Control as="select">
          <option>Telephonic</option>
          <option>Face-to-Face</option>
          <option>Skype</option>
        </Form.Control>
        <br />
        <Form.Label>Date of Interview </Form.Label>
        <Form.Control type="date"  />
        <br />
        <Form.Label>Time Slot  </Form.Label>
        <Form.Control as="select">
          <option>10 am - 11 am</option>
          <option>11 am - 12 pm</option>
          <option>12 pm - 1 pm</option>
          <option>3 pm - 4 pm</option>
          <option>5 pm - 6 pm</option>
         
          
        </Form.Control>
        <br />
        <Form.Check 
    type="switch"
    id="custom-switch"
    label="Notify Applicant by Email"
  />
   <br />
  
    <Button href="/home/application-managment" variant="success">Schedule</Button>
                          
      </Form.Group>
       
     </div>
        
       
       
    );
  }
}

import React, { Component } from "react";
import {Button, Form} from 'react-bootstrap';


export default class GenerateSchedule extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(event){
       
        this.props.history.push('/home/generate-schedule/suggestions');
      }
    render() {
        return (
            <div id="generateScheduleId" >
                <Form  >
                <h3>Request Schedule Suggestions</h3>
                

                
                     <Button  variant="dark" onClick={this.handleSubmit}>Request Schedule</Button>
                
                </Form>
               
            </div>
          
        );
    }
}
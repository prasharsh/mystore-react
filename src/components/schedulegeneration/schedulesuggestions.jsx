import React, { Component } from "react";
import {Dropdown,Button,DropdownItem} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Schedule1 from "./schedulesuggest1";
import Schedule2 from "./schedulesuggest2";
import {LinkContainer} from "react-router-bootstrap";
export default class ScheduleSuggestions extends Component {
    render() {
        return (

            <div id="scheduleSuggestionId">
             <h3>Request Schedule Suggestions</h3>
             <Dropdown>
  <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
  Select Any Schedule
  </Dropdown.Toggle>

  <Dropdown.Menu>
  <DropdownItem>
  <LinkContainer to="/home/generate-schedule/suggestions/suggest1">
 <Button  variant="link">Schedule 1</Button>
 </LinkContainer>
  </DropdownItem>
  <DropdownItem>
<LinkContainer to="/home/generate-schedule/suggestions/suggest2">
 <Button  variant="link">Schedule 2</Button>
</LinkContainer>
</DropdownItem>
  </Dropdown.Menu>
</Dropdown>


       <Router>

       <Switch>
           
            <Route  path="/home/generate-schedule/suggestions/suggest1"> <Schedule1 /> </Route>
            <Route  path="/home/generate-schedule/suggestions/suggest2"> <Schedule2 /> </Route>
          </Switch>
       </Router>
          
     
            </div>
           
        );
    }
}
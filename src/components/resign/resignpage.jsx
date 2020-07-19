
import React, { Component } from "react";
import "./resign.css";


import ComplaintImage from "../complaints/complaint.svg";

import "../login/login.css";

import { Jumbotron, Button, Container } from "react-bootstrap";

class ResignPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    
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
            <Jumbotron className="jumbotron bg-dark text-white" >
  <h1>Policy brief & purpose</h1>
  <p>
Our Resignation policy presents guidelines for handling resignations at our company. Voluntary separations happen occasionally, and we want to ensure that our company appropriately handles them and maintains a smoothly-running workplace.
  </p>

Employees have the right to resign when they want and at their own free will. Forced resignation (or constructive dismissal) must not occur at any time. Specifically, the following actions are prohibited:

    Creating a hostile or unpleasant environment.
    Demanding or coaxing an employee to resign.
    Victimizing, harassing or retaliating against an employee.
    Taking adverse actions (e.g. demotions, increased workload) unofficially, outside of our disciplinary process, to force an employee to resign.

We reserve the right to terminate employees when they don’t adhere to our policies or the law, or those who place our company at risk.

</Jumbotron>
          </div>
          </div>
      </div>
        
          <div className="col-md-12">
          <Jumbotron className="jumbotron bg-dark text-white" >
  <h1 text="center">Notice Of Resignation</h1>
  <p text="left">
Employees may not be obliged to give advance notice before resigning. But, for efficiency’s sake, and to maintain smooth operations of our workplace, we encourage them to announce their intent to resign at least [two weeks] in advance.

For harder-to-fill positions or more high-profile roles, like [VPs, C-suite executives, data scientists], we advise our employees to give at least [a month’s] notice, if possible.

Sometimes, employees’ contracts bind them to give notice. If they don’t give notice, we may not be obliged to pay out remaining paid vacation leave or other benefits, unless local or national law mandates it.

We ask employees to submit a written, signed notice of resignation for record-keeping purposes. We accept verbal resignations, too. If an employee verbally resigns, the employee will receive an acceptance of resignation letter within [two days.] The advance notice period starts from the moment an employee submits an official notice, whether verbal or written. They can inform either their supervisor or HR, although we advise them to inform both.
  </p>
</Jumbotron>
          <div className="card">
            <div className="card-body">
              <div className="row">
                
                <div className="col-md-12">
                <div align="center">
                  <table className="table-sm table-bordered table-active">
                    <tbody>
                      <tr>
                        <td>
                        <span
                          className="btn active"
                            type="submit"
                            onClick={() =>
                              this.props.history.push("/home/applyresign")
                            }
                          >
   
                         Apply
                          </span>
                          </td>
                        <td>
                          <span
                          className="btn active"
                            type="submit"
                            onClick={() =>this.props.history.push("/home/resigndetails")}
                          >
                              
                            View 
                          </span>
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                
                </div>
                </div>
               
                </div>
        
                </div>
                
                </div>
           

           );
       }
   }
   export default ResignPage;
import React, { Component } from "react";
import "./resign.css";

import ComplaintImage from "../complaints/complaint.svg";

import "../login/login.css";

import { Jumbotron, Button, Container } from "react-bootstrap";

class ResignPage extends Component {
    state = {};
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
        
          <div className="col-md-12">
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
   
                         Apply Resignation
                          </span>
                          </td>
                        <td>
                          <span
                          className="btn active"
                            type="submit"
                            onClick={() =>
                              this.props.history.push("/home/viewresign")
                            }
                          >
                              
                            View Resignatoion
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
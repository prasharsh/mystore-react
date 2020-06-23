import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./resign.css";

class ResignDetails extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}>
                      <img className="profile-img" src={ComplaintImage}></img>{" "}
                    </div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Resignation Details</h4>
                      <hr></hr>
                    </div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="column1">
                            <b>Emp No.:</b>
                          </td>
                          <td className="column2"> JB765 </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            {" "}
                            <b> Name : </b>
                          </td>
                          <td className="column2"> James Blunt </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            <b>Reason  </b>
                          </td>
                          <td className="column2"> Re-locating to different province  </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            {" "}
                            <b> Manager : </b>
                          </td>
                          <td className="column2"> Chris Luke </td>
                        </tr>
                        
                      </tbody>
                    </table>
                    <br></br>
                    <div className="row">
                      <div className="col-md-12">
                        <div align="center">
                          <div style={{ display: "inline-block" }}>
                            <button
                              onClick={() =>
                                this.props.history.push("/home/applyresign")
                              }
                              name="submit"
                              className="btn btn-primary mx-2"
                            >
                              Edit Form
                            </button>
                            <button
                              onClick={() =>
                                this.props.history.push("/home/resign")
                              }
                              name="submit" 
                              
                              className="btn btn-primary mx-2"
                            >
                              Delete 
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ResignDetails;

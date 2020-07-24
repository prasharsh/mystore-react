import React, { Component } from "react";
import ComplaintImage from "../complaints/complaint.svg";
import "../login/login.css";
import "./resign.css";
import "./resignpage";
import Popup from 'react-popup';
import AcceptResignation from "../request/resignation";

class ResignDetails extends Component {
  constructor() {
    super();
   
  this.state = {
    resign:[]
  };
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
  

  deleteresignation = () =>{
    const empid=localStorage.getItem("id");
    fetch(`http://localhost:8080/api/myStore/resignation/delete/${empid}`,
    {
      method: "DELETE",
    })

   .then((response) => response.json())
   .then((responseJson) => {
    const result =responseJson
    if(result === 'Success')
    {
      alert("You are about to delete your resignation")
      this.props.history.push("/home/resign")
      alert("Your Resignation was deleted successfully", "Resignation deletion successful");
    }
    else
    alert("Error deleting resignation, try again")
   })
  }



  render() {
    const resign=this.state.resign;
    console.log(resign)
    return (
  
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
                          <td  className="column2">{resign.empid} </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            {" "}
                            <b> Name : </b>
                          </td>
                          <td className="column2"> {resign.name}  </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            <b>Reason  </b>
                          </td>
                          <td className="column2"> {resign.reason}  </td>
                        </tr>
                        <tr>
                          <td className="column1">
                            {" "}
                            <b> Status : </b>
                          </td>
                          <td className="column2"> {resign.status} </td>
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
                                this.props.history.push("/home/editresign")
                              }
                              name="submit"
                              className="btn btn-primary mx-5"
                            >
                              Edit Form
                            </button>
                            <button
                              onClick={this.deleteresignation}
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

 

    );
}
}


export default ResignDetails;

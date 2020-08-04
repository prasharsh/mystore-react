import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, Button, Form } from "react-bootstrap";
import "../../App.css";

class CreateSwap extends React.Component {
  state = {
    shiftType: "",
    startDate: new Date(),
    shifts: [],
  };

  componentDidMount() {
    const username = localStorage.getItem("username");
    fetch(
      `https://mystore-spring.herokuapp.com/api/shift/fetchShiftsByUsername/${username}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            shifts: result,
          });
          this.state.shifts.map((index) => {
            console.log(index.swapDate);
            console.log(index.shiftType);
          });
          this.render();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  handleChange = (date) => {
    this.setState({
      startDate: date,
      shiftType: "S1",
    });
  };
  submitSwap() {
    let isValid = false;
    let shiftSwap;
    let radio = document.getElementsByName("shift");
    for (var i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        console.log(radio[i].value);
        isValid = true;
        shiftSwap = {
          swapDate: radio[i].id,
          shiftType: radio[i].value,
          swapComments: this.refs.comment.value,
          swapRequestor: localStorage.getItem("id"),
        };
      }
    }

    if (isValid) {
      fetch(
        "https://mystore-spring.herokuapp.com/api/shift/createSwapRequest",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(shiftSwap),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          alert("Shift created successfully");
        });
    } else alert("please select a date");
  }

  renderShiftsforSwap() {
    const shifts = this.state.shifts;
    console.log("inside render shifts" + shifts);
    if (shifts) {
      const s = shifts.filter((item) => item.shiftType);
      console.log(s.length + "++++++++++++++++++");
      if (s.length == 0) {
        return (
          <>
            <br />
            <br />
            <div>You do not have any scheduled shift to swap</div>
          </>
        );
      }
      return s.map((index) => (
        <tbody>
          {console.log(index.swapDate + "==========")}
          <tr>
            <td>
              <input
                type="radio"
                id={index.swapDate}
                name="shift"
                value={index.shiftType}
              />
            </td>
            <td>{index.swapDate}</td>
            <td>{index.shiftType}</td>
          </tr>
        </tbody>
      ));
    } else {
      console.log("no items to display");
    }
  }
  render() {
    const { shiftType } = this.state;
    let shift = "";
    if (shiftType !== "") {
      shift = "Shift Type : " + shiftType;
    }
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Create New Shift Swap Request</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div align="center">
                <Card border="primary" style={{ width: "36rem" }}>
                  <Card.Body>
                    <table className="table">
                      <thead className="thead-container"></thead>
                      Select Shift For Swap
                      {this.renderShiftsforSwap()}
                    </table>
                    <br />
                    <Form.Label>{shift}</Form.Label>
                    <br />
                    <Form.Control
                      ref="comment"
                      as="textarea"
                      rows="3"
                      placeholder="Reason"
                    />
                    <br />
                    <Button variant="dark" onClick={() => this.submitSwap()}>
                      Create Swap Request
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
        ** A user can create multiple swap requests for the same day.
      </div>
    );
  }
}
export default CreateSwap;

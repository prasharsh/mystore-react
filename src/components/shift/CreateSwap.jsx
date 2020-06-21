import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { Card, Button, Form } from "react-bootstrap";
import "../../App.css";
import "./SwapShift.css";

class CreateSwap extends React.Component {
  state = {
    shiftType: "",
    startDate: new Date(),
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
      shiftType: "S1",
    });
  };
  submitSwap() {
    console.log(this.refs.dateP.value);
    if (this.refs.dateP.value !== "") {
      window.alert("Shift swap request created.");

      window.location.reload();
    } else {
      window.alert("Enter date");
    }
  }

  render() {
    const { shiftType } = this.state;
    let shift = "";
    if (shiftType !== "") {
      shift = "Shift Type : " + shiftType;
    }
    return (
      <React.Fragment>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <Card border="dark" style={{ width: "36rem" }}>
                      <Card.Body>
                        <Card.Text>Create new shift swap request</Card.Text>
                        <DatePicker
                          selected={this.state.startDate}
                          placeholderText="Enter Swap Shift Date"
                          onChange={this.handleChange}
                          minDate={new Date()}
                        />
                        <br />
                        <Form.Label>{shift}</Form.Label>
                        <br />
                        <Form.Control
                          ref="dateP"
                          as="textarea"
                          rows="3"
                          placeholder="Reason"
                        />
                        <br />
                        <Button
                          variant="dark"
                          onClick={() => this.submitSwap()}
                        >
                          Create Swap Request
                        </Button>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default CreateSwap;

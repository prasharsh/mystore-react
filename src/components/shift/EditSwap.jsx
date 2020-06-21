import React, { Component } from "react";
import "../../App.css";
import { Table, Button, Form } from "react-bootstrap";

class EditSwap extends Component {
  constructor(props) {
    super(props);
    this.deleteReq = this.deleteReq.bind(this);
    this.updateReq = this.updateReq.bind(this);
    this.state = {
      openSwapRequests: [
        {
          id: "SR1",
          swapDate: "16-06-2020",
          shiftType: "S1",
          reason: "personal",
        },
        {
          id: "SR2",
          swapDate: "15-06-2020",
          shiftType: "S2",
          reason: "not in town",
        },
      ],
    };
  }

  renderTable() {
    const { openSwapRequests } = this.state;
    console.log(openSwapRequests);
    if (openSwapRequests.length > 0) {
      return (
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Swap Date</th>
              <th>Shift Type</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderSwapRequests()}</tbody>
        </Table>
      );
    } else {
      return <div>No open swap requests</div>;
    }
  }

  deleteReq(index) {
    console.log(index);
    this.setState({
      openSwapRequests: this.state.openSwapRequests.filter(
        (item) => item.id !== index.id
      ),
    });
    window.alert("Request deleted ");
  }

  updateReq(index) {
    console.log(this.refs.reason.value);
    console.log(index.id);
    //update to backend logic here
    window.alert("Request updated!");
  }

  renderSwapRequests() {
    const { openSwapRequests } = this.state;
    if (openSwapRequests.length > 0) {
      return openSwapRequests.map((index) => (
        <>
          <tr>
            <td>{index.id}</td>
            <td>{index.swapDate}</td>
            <td>{index.shiftType}</td>
            <td>
              <Form.Control
                ref="reason"
                as="textarea"
                rows="3"
                placeholder="Reason"
              >
                {index.reason}
              </Form.Control>
            </td>
            <td>
              <Button variant="primary" onClick={() => this.updateReq(index)}>
                Update
              </Button>{" "}
              {"  "}
              <Button variant="danger" onClick={() => this.deleteReq(index)}>
                Delete
              </Button>
            </td>
          </tr>
        </>
      ));
    } else {
      return <div>No open swap requests</div>;
    }
  }

  render() {
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
                      <h4>Edit/Delete Swap Request</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div align="center">
                <br />
                <br />
                {this.renderTable()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default EditSwap;

import React, { Component } from "react";
import "../../App.css";
import { Table, Button, Form } from "react-bootstrap";

class EditSwap extends Component {
  constructor(props) {
    super(props);
    this.deleteReq = this.deleteReq.bind(this);
    this.updateReq = this.updateReq.bind(this);
    this.state = {
      openSwapRequests: [],
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("id");
    fetch(
      `https://mystore-spring.herokuapp.com/api/shift/fetchSwapReqByUserid/${id}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          this.setState({
            openSwapRequests: result,
          });
          this.render();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  renderTable() {
    const { openSwapRequests } = this.state;
    console.log(openSwapRequests);
    if (openSwapRequests.length > 0) {
      return (
        <Table responsive="sm" striped bordered hover>
          <thead>
            <tr>
              <th>Shift Request Id</th>
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
    fetch(
      `https://mystore-spring.herokuapp.com/api/shift/deleteShift/${index.swapId}`
    )
      .then((response) => response.json())
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  updateReq(index) {
    console.log(this.refs.reason.value);
    console.log(index.swapId);
    let shiftReq = {
      swapId: index.swapId,
      swapComments: this.refs.reason.value,
    };
    fetch(
      "https://mystore-spring.herokuapp.com/api/shift/updateShiftComments",
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(shiftReq),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert("Shift updated successfully");
      });
    console.log(this.refs.reason.value);
    console.log(index.id);
    //update to backend logic here
  }

  renderSwapRequests() {
    const { openSwapRequests } = this.state;
    if (openSwapRequests.length > 0) {
      return openSwapRequests.map((index) => (
        <>
          <tr>
            <td>{index.swapId}</td>
            <td>{index.swapDate}</td>
            <td>{index.shiftType}</td>
            <td>
              <Form.Control
                ref="reason"
                as="textarea"
                rows="3"
                placeholder="Reason"
              >
                {index.swapComments}
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

import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "../../App.css";

class SwapRequests extends Component {
  constructor(props) {
    super(props);
    this.swapShift = this.swapShift.bind(this);
    this.state = {
      openSwapRequests: [
        {
          id: "SR1",
          swapDate: "16-06-2020",
          shiftType: "S1",
          raisedBy: "Brad",
          reason: "personal",
        },
        {
          id: "SR2",
          swapDate: "15-06-2020",
          shiftType: "S2",
          raisedBy: "Tom",
          reason: "not in town",
        },
      ],
      notificationInfo: [
        {
          title: "Store Hour Update",
          text:
            "I am delighted to bring to you this great news that Nova Scotia has not had any new COVID 19 cases for the last week. With this the store will now be open till 9 pm on the weekends. Thank you team for your support. ",
        },
        {
          title: "Team Party Postponed",
          text:
            "Qurterly team party for June month is postponed due to lockdown restrictions in the city, We shll party once things go back to Normal. You do get a free Pizza on duty, but we need to practice social distancing. TC :) ",
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
              <th>Swap With</th>
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

  swapShift(index) {
    console.log(index);
    this.setState({
      openSwapRequests: this.state.openSwapRequests.filter(
        (item) => item.id !== index.id
      ),
    });
    window.alert("Shift successfully swapped with " + index.raisedBy);
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
            <td>{index.raisedBy}</td>
            <td>{index.reason}</td>
            <td>
              <Button variant="dark" onClick={() => this.swapShift(index)}>
                Swap Shift
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
                      <h4>Swap Request</h4>
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
export default SwapRequests;

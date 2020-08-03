import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import "../../App.css";

class SwapRequests extends Component {
  constructor(props) {
    super(props);
    this.swapShift = this.swapShift.bind(this);
    this.state = {
      openSwapRequests: [],
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("id");
    fetch(
      `https://mystore-spring.herokuapp.com/api/shift/fetchOpenSwapReqByUserid/${id}`
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
              <th>Swap Id</th>
              <th>Swap Date</th>
              <th>Shift Type</th>
              <th>Swap With (EMP ID)</th>
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
    let swap = {
      swapId: index.swapId,
      swapDate: index.swapDate,
      shiftType: index.shiftType,
      swapComments: index.swapComments,
      swapRequestor: index.swapRequestor,
      swappedWith: localStorage.getItem("id"),
    };
    fetch("https://mystore-spring.herokuapp.com/api/shift/acceptShift", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(swap),
    })
      .then((response) => response.json())
      .then((data) => {
        window.alert("Shift successfully swapped !");
        window.location.reload();
      });
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
            <td>{index.swapRequestor}</td>
            <td>{index.swapComments}</td>
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

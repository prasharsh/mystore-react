import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import "./Application.css";

export default class ApplicationManagment extends Component {
  state = {
    application: [],
    selectedJob: {},
    selected: false,
  };

  async componentDidMount() {
    //BACK END CALL to get the list of job postings

    let application = [
      {
        id: 1,
        position: "Waiter",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 2,
        position: "Waiter",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 3,
        position: "Waiter",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 4,
        position: "Cook",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 5,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 6,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 7,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 8,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 9,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 10,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 11,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
      {
        id: 12,
        position: "Manager",
        firstName: "First",
        lastName: "Last",
        email: "fake@dal.ca",
        date: "Jan 1, 2020",
        address: "123 Hickamore st, Halifax",
        phoneNumber: "123-123-1234",
        type: "Part-time",
        shift: "Weekends",
        requirments:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",

        description:
          "Lorem ipsum dolor sit amet, vel habeo eirmod omittam te. Meis quaestio qualisque usu ex, eos et copiosae partiendo petentium",
      },
    ];

    this.setState(() => ({ application }));
  }
  handleDetails = (value) => {
    this.props.history.push({
      pathname: "/home/application-details",
      state: { value },
    });
  };
  handleDelete = (index) => {
    let app = this.state.application;
    delete app[index];
    this.setState({ application: app });
  };

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-12">
                  <div align="center">
                    <div style={{ display: "inline-block" }}></div>
                    <span className="p-2"></span>
                    <div style={{ display: "inline-block" }}>
                      <h4>Applicant</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
              <div className="scrollTable">
                <Table responsive="sm">
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Position</th>
                      <th>Date</th>
                      <th>Details</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.application.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td>{value.id}</td>
                          <td>{value.firstName}</td>
                          <td>{value.lastName}</td>
                          <td>{value.email}</td>
                          <td>{value.position}</td>
                          <td>{value.date}</td>

                          <td>
                            <button
                              name="submit"
                              className="btn btn-info"
                              onClick={() => this.handleDetails(value)}
                            >
                              Details
                            </button>
                          </td>

                          <td>
                            <button
                              name="submit"
                              className="btn btn-primary mr-2"
                              onClick={() => this.handleDelete(index)}
                            >
                              Accept
                            </button>
                            <button
                              name="submit"
                              className="btn btn-danger mr-2"
                              onClick={() => this.handleDelete(index)}
                            >
                              Reject
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

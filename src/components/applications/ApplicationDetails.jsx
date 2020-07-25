import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplicationDetailsForm from "./ApplicationDetailsForm";
import ScheduleInterview from "./ScheduleInterview";
import axios from "axios";

export default class ApplicationDetails extends Component {
  componentDidMount = async () => {
    let applicationURL =
      "https://mystore-spring.herokuapp.com/api/applications/fetchByApplicationID/";
    let application = this.props.location.state.value;

    await axios.get(applicationURL + `${application.applicationID}`).then(
      (response) => {
        this.setState(() => ({ application: response.data }));
      },
      (error) => {
        console.log(error);
      }
    );
  };

  state = {
    application: {},
    type: "Telephonic",
    date: "",
    dateInvalid: false,
    time: "10 am - 11 am",
    notify: false,
    selected: false,
  };

  handleType = (event) => {
    this.setState({ type: event.target.value });
  };
  handleDate = (event) => {
    if (event.target.value !== "") {
      this.setState({ dateInvalid: false });
    }

    this.setState({ date: event.target.value });
  };
  handleTime = (event) => {
    this.setState({ time: event.target.value });
  };
  handleNotify = (event) => {
    let { notify } = this.state;
    notify = !notify;
    this.setState({ notify });
  };

  handleSchedule = async () => {
    const { type, date, time, notify } = this.state;

    if (date === "") {
      this.setState({ dateInvalid: true });
    } else {
      let interview = {
        applicationID: this.state.application.applicationID,
        type: type,
        date: date,
        time: time,
        notify: notify,
      };
      let interviewURL =
        "https://mystore-spring.herokuapp.com/api/interview/insertInterview";
      await axios.post(interviewURL, interview).then(
        (response) => {
          if (response.data) {
            this.setState({ selected: true });
            alert(
              "Interview for: " +
                this.state.application.firstName +
                " has been added"
            );
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };

  render() {
    if (this.state.selected) {
      this.props.history.push("/home/application-managment");
    }
    const { application } = this.state;
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
                      <h4>Application Details</h4>
                      <hr></hr>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Container>
              <Row>
                <Col>
                  {" "}
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div align="center">
                            <div style={{ display: "inline-block" }}></div>
                            <span className="p-2"></span>
                            <div style={{ display: "inline-block" }}>
                              <h4>Application Details</h4>
                              <hr></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <ApplicationDetailsForm
                          value={application}
                        ></ApplicationDetailsForm>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12">
                          <div align="center">
                            <div style={{ display: "inline-block" }}></div>
                            <span className="p-2"></span>
                            <div style={{ display: "inline-block" }}>
                              <h4>Schedule Interview</h4>
                              <hr></hr>
                            </div>
                          </div>
                        </div>
                      </div>

                      <ScheduleInterview
                        handleType={this.handleType}
                        handleDate={this.handleDate}
                        handleTime={this.handleTime}
                        handleNotify={this.handleNotify}
                        handleSchedule={this.handleSchedule}
                        state={this.state}
                      ></ScheduleInterview>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

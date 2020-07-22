import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplicationDetailsForm from "./ApplicationDetailsForm";
import ScheduleInterview from "./ScheduleInterview";
import axios from "axios";

export default class ApplicationDetails extends Component {
  componentDidMount = async () => {
    let applicationURL =
      "http://localhost:8080/api/applications/fetchByApplicationID/";
    let application = this.props.location.state.value;

    await axios.get(applicationURL + `${application.applicationID}`).then(
      (response) => {
        console.log(response.data);
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
    console.log(event.target.value);
    this.setState({ type: event.target.value });
  };
  handleDate = (event) => {
    if (event.target.value !== "") {
      this.setState({ dateInvalid: false });
    }
    console.log(event.target.value);

    this.setState({ date: event.target.value });
  };
  handleTime = (event) => {
    console.log(event.target.value);

    this.setState({ time: event.target.value });
  };
  handleNotify = (event) => {
    console.log(event.target.value);
    let { notify } = this.state;
    notify = !notify;
    this.setState({ notify });
  };

  handleSchedule = async () => {
    console.log("here");
    const { type, date, time, notify } = this.state;
    console.log(type);
    console.log(date);
    console.log(time);
    console.log(notify);
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
      let interviewURL = "http://localhost:8080/api/interview/insertInterview";
      await axios.post(interviewURL, interview).then(
        (response) => {
          console.log(response.data);
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
    console.log(application);
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

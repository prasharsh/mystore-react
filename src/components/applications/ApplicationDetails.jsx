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
  };
  render() {
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

                      <ScheduleInterview></ScheduleInterview>
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

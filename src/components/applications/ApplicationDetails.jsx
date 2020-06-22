import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ApplicationDetailsForm from "./ApplicationDetailsForm";
import JobForm from "./JobForm";

export default class ApplicationDetails extends Component {
  render() {
    console.log(this.props.location.state.value);
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
                      <h4>Applications Details</h4>
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
                              <h4>Applications Details</h4>
                              <hr></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <ApplicationDetailsForm
                          value={this.props.location.state.value}
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
                              <h4>Applications Details</h4>
                              <hr></hr>
                            </div>
                          </div>
                        </div>
                      </div>
                      <JobForm
                        value={this.props.location.state.value}
                      ></JobForm>
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

import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export default class Job extends Component {
  render() {
    return (
      <Container style={{ textAlign: "start", borderBottom: "3px solid gray" }}>
        <Row style={{ height: "40px" }}>
          <Col>JobID: {this.props.job.id}</Col>
        </Row>
        <Row style={{ height: "40px" }}>
          <Col>{this.props.job.position}</Col>
          <Col style={{ textAlign: "center" }}>
            <Button onClick={() => this.props.handleOnClick(this.props.job)}>
              Details
            </Button>
          </Col>
        </Row>
        <Row style={{ height: "40px" }}>
          <Col>{this.props.job.type}</Col>
        </Row>
      </Container>
    );
  }
}

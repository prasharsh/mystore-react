import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./home.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import AnnouncementImg from "./announcement.svg";
import ViewAnnouncementModal from "./view-announcement-modal.jsx";
import ViewNotificationModel from "./view-notification-modal.jsx";
import NotificationImg from "./notification.svg";
import TeamImg from "./team.svg";
import BuildingImg from "./building.svg";
class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numArray: [1, 2, 3],
      showAnnouncement: false,
      showNotification: false,
    };
  }

  showAnnouncement = () => {
    this.setState({ showAnnouncement: true });
  };

  hideAnnouncement = () => {
    this.setState({ showAnnouncement: false });
  };

  showNotification = () => {
    this.setState({ showNotification: true });
  };

  hideNotification = () => {
    this.setState({ showNotification: false });
  };

  render() {
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <Container>
                <Row className="">
                  <Col>
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img
                          className="profile-img"
                          src={AnnouncementImg}
                        ></img>{" "}
                        Announcements
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {this.state.numArray.map((value, index) => {
                            return (
                              <ListGroup.Item
                                key={index}
                                action
                                onClick={this.showAnnouncement}
                              >
                                Announcement {value}
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img
                          className="profile-img"
                          src={NotificationImg}
                        ></img>{" "}
                        Notfications
                      </Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {this.state.numArray.map((value, index) => {
                            return (
                              <ListGroup.Item
                                key={index}
                                action
                                onClick={this.showNotification}
                              >
                                Notification {value}
                              </ListGroup.Item>
                            );
                          })}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col>
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img className="profile-img" src={TeamImg}></img>{" "}
                        Operational Details
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>Today's Crew</Card.Title>
                        <Card.Text>Bob, Alice, Ravi, Angela</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col>
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img className="profile-img" src={BuildingImg}></img>{" "}
                        Store Details
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          Shopper Drug Mart<br></br>
                          Qungate place, Halifax, NS, Canada<br></br>
                          drugmart@gmail.com
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <ViewAnnouncementModal
          show={this.state.showAnnouncement}
          closeModal={this.hideAnnouncement}
        ></ViewAnnouncementModal>
        <ViewNotificationModel
          show={this.state.showNotification}
          closeModal={this.hideNotification}
        ></ViewNotificationModel>
      </div>
    );
  }
}

export default Wall;

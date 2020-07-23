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
import CreateAnnouncementModel from "./create-announcement-modal.jsx";
import Loader from "../complaints/loader.js";
class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnnouncement: false,
      showNotification: false,
      showCreateAnnouncement: false,
      announcements: [],
      loadingNotifications: true,
      loadingAnnouncements: true,
      notifications: [],
      activeAnnouncement: {},
      activeNotification: "",
      acitiveAnnoucementId: 0,
    };
  }

  componentDidMount() {
    this.getAnnouncementDetailsAgain();
    this.getNotificationDetailsAgain();
  }

  getNotificationDetailsAgain() {
    const userId = localStorage.getItem("id");
    fetch(
      `http://localhost:8080/api/notifications/getUserNotifications/${userId}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        let notifications = [];
        for (var i = 0; i < responseJson.length; i++) {
          notifications.push(responseJson[i]);
        }

        this.setState({
          notifications: notifications,
        });
        this.setState({ loadingNotifications: false });
      });
  }
  getAnnouncementDetailsAgain() {
    fetch(`http://localhost:8080/api/annoucements/getAllAnnouncements`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(typeof this.state.numArray);
        let announcements = [];
        for (var i = 0; i < responseJson.length; i++) {
          announcements.push(responseJson[i]);
        }

        this.setState({
          announcements: announcements,
        });

        this.setState({ loadingAnnouncements: false });
      });
  }

  showAnnouncement = (announcement) => {
    this.setState({ showAnnouncement: true });
    this.setState({ activeAnnouncement: announcement });
  };
  showCreateAnnouncement = () => {
    this.setState({ showCreateAnnouncement: true });
  };

  hideCreateAnnouncement = (type) => {
    this.setState({ showCreateAnnouncement: false });
    if (type === "save") {
      this.getAnnouncementDetailsAgain();
    }
  };

  hideAnnouncement = (type) => {
    this.setState({ showAnnouncement: false });
    if (type === "save") {
      this.getAnnouncementDetailsAgain();
    }
  };

  showNotification = (notification) => {
    this.setState({ showNotification: true });
    this.setState({ activeNotification: notification });
  };

  hideNotification = (type) => {
    this.setState({ showNotification: false });
    if (type === "save") {
      this.getNotificationDetailsAgain();
    }
  };

  render() {
    if (this.state.loadingAnnouncements || this.state.loadingNotifications)
      return <Loader />;
    const isManager = localStorage.getItem("role") === "manager";
    return (
      <div>
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <Container>
                <Row>
                  <Col className="col-md-4">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img
                          className="profile-img"
                          src={AnnouncementImg}
                        ></img>{" "}
                        Announcements
                      </Card.Header>
                      <Card.Body>
                        <div className="card-container-announcement">
                          <ListGroup variant="flush">
                            {this.state.announcements.map((value, index) => {
                              return (
                                <ListGroup.Item
                                  key={index}
                                  action
                                  onClick={() => this.showAnnouncement(value)}
                                >
                                  Announcement {value.id}
                                  <br></br>
                                  Date: {value.announcementDate}
                                </ListGroup.Item>
                              );
                            })}
                          </ListGroup>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col className="col-md-4"> </Col>
                  <Col className="col-md-4">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img
                          className="profile-img"
                          src={NotificationImg}
                        ></img>{" "}
                        Notfications
                      </Card.Header>

                      <Card.Body>
                        <div className="card-container-not">
                          <ListGroup variant="flush">
                            {this.state.notifications.map((value, index) => {
                              return (
                                <ListGroup.Item
                                  key={index}
                                  action
                                  onClick={() => this.showNotification(value)}
                                >
                                  Notification {value.id}
                                  <br></br>
                                  Type: {value.notificationType}
                                  <br></br>
                                  Date: {value.notificationDate}
                                  <br></br>
                                </ListGroup.Item>
                              );
                            })}
                          </ListGroup>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br></br>
                <Row>
                  <Col className="col-md-4">
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
                  <Col className="col-md-4"></Col>
                  <Col className="col-md-4">
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
              <br></br>
              {isManager ? (
                <div className="row">
                  <div className="col-md-12">
                    <div align="center">
                      <div style={{ display: "inline-block" }}>
                        <button
                          onClick={this.showCreateAnnouncement}
                          name="submit"
                          className="btn btn-dark"
                        >
                          Create Announcement
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <ViewAnnouncementModal
          show={this.state.showAnnouncement}
          closeModal={this.hideAnnouncement}
          announcement={this.state.activeAnnouncement}
        ></ViewAnnouncementModal>
        <ViewNotificationModel
          show={this.state.showNotification}
          closeModal={this.hideNotification}
          notification={this.state.activeNotification}
        ></ViewNotificationModel>
        <CreateAnnouncementModel
          show={this.state.showCreateAnnouncement}
          closeModal={this.hideCreateAnnouncement}
        ></CreateAnnouncementModel>
      </div>
    );
  }
}

export default Wall;

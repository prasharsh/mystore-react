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
      showAnnouncement: false,
      showNotification: false,
      announcements: [],
      notifications: [],
      activeAnnouncement: "",
      activeNotification: "",
    };
  }

  componentDidMount() {
    this.getDetailsAgain();
  }

  getDetailsAgain() {
    const role = localStorage.getItem("role");
    const userId = localStorage.getItem("id");

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
        console.log(this.state.announcements);
      });
    fetch(
      `http://localhost:8080/api/notifications/getUserNotifications/${userId}`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(typeof this.state.numArray);
        let notifications = [];
        for (var i = 0; i < responseJson.length; i++) {
          notifications.push(responseJson[i]);
        }

        this.setState({
          notifications: notifications,
        });
        console.log(this.state.announcements);
      });
  }

  showAnnouncement = (announcement) => {
    this.setState({ showAnnouncement: true });
    this.setState({ activeAnnouncement: announcement });
  };

  hideAnnouncement = () => {
    this.setState({ showAnnouncement: false });
  };

  showNotification = (notification) => {
    this.setState({ showNotification: true });
    this.setState({ activeNotification: notification });
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
                        <div className="card-container-announcement">
                          <ListGroup variant="flush">
                            {this.state.announcements.map((value, index) => {
                              return (
                                <ListGroup.Item
                                  key={index}
                                  action
                                  onClick={() =>
                                    this.showAnnouncement(value.announcement)
                                  }
                                >
                                  Announcement {index + 1}
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
                <br></br>
                <Row>
                  {localStorage.getItem("role") !== "guest" ? (
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
                          <div className="card-container-not">
                            <ListGroup variant="flush">
                              {this.state.notifications.map((value, index) => {
                                return (
                                  <ListGroup.Item
                                    key={index}
                                    action
                                    onClick={() =>
                                      this.showNotification(value.notification)
                                    }
                                  >
                                    Notification {index + 1}
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
                  ) : null}

                  <br></br>
                  {localStorage.getItem("role") !== "guest" ? (
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
                  ) : null}
                </Row>
              </Container>
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
      </div>
    );
  }
}

export default Wall;

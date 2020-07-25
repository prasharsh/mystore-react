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
import UpdateStoreDetails from "./update-store-details.jsx";
class Wall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnnouncement: false,
      showNotification: false,
      showCreateAnnouncement: false,
      showUpdateStoreDetails: false,
      storeDetails: {},
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
    this.getStoreDetails();
    this.getAnnouncementDetailsAgain();
    this.getNotificationDetailsAgain();
  }
  getStoreDetails() {
    fetch(
      `https://mystore-spring.herokuapp.com/api/storeDetails/getStoreDetails`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          storeDetails: responseJson,
        });
      });
  }

  getNotificationDetailsAgain() {
    const userId = localStorage.getItem("id");
    fetch(
      `https://mystore-spring.herokuapp.com/api/notifications/getUserNotifications/${userId}`
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
    fetch(
      `https://mystore-spring.herokuapp.com/api/annoucements/getAllAnnouncements`
    )
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
      alert("Annoucement Created!");
    } else if (type === "SaveFailed") {
      alert("Could Not Create Announcement!");
    }
  };

  hideAnnouncement = (type) => {
    this.setState({ showAnnouncement: false });
    if (type === "save") {
      this.getAnnouncementDetailsAgain();
      alert("Announcement Deleted Successfully!");
    } else if (type === "SaveFailed") {
      alert("Announcement Delete Unsuccessful!");
    }
  };

  showUpdateStoreDetails = () => {
    this.setState({ showUpdateStoreDetails: true });
  };
  hideUpdateStoreDetails = (type) => {
    this.setState({ showUpdateStoreDetails: false });
    if (type === "save") {
      this.getStoreDetails();
      alert("Store Details Updated Successfully!");
    } else if (type === "SaveFailed") {
      alert("Store Details Update Unsuccessful!");
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
      alert("Notification Deleted Successfully!");
    } else if (type === "SaveFailed") {
      alert("Notification Delete Unsuccessful!");
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
                <Row className="justify-content-md-center">
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
                  <Col className="col-md-4">
                    <Card border="dark" style={{ width: "18rem" }}>
                      <Card.Header>
                        <img className="profile-img" src={BuildingImg}></img>{" "}
                        Store Details
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          Store Name: {this.state.storeDetails.storeName}
                          <br></br>
                          Address: {this.state.storeDetails.address}
                          <br></br>
                          Email: {this.state.storeDetails.storeEmail}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <br></br>

                {localStorage.getItem("role") !== "guest" ? (
                  <Row className="justify-content-md-center">
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
                    <Col className="col-md-4">
                      <Card border="dark" style={{ width: "18rem" }}>
                        <Card.Header>
                          <img className="profile-img" src={TeamImg}></img>{" "}
                          Developement Team
                        </Card.Header>
                        <Card.Body>
                          <Card.Title>Dalhousi University</Card.Title>
                          <Card.Text> Team 8 CSCI 5709</Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                ) : null}
              </Container>
              <br></br>

              <div className="row">
                <div className="col-md-2"></div>
                {isManager ? (
                  <div className="col-md-4">
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
                ) : null}

                {isManager ? (
                  <div className="col-md-3">
                    <div align="center">
                      <div style={{ display: "inline-block" }}>
                        <button
                          onClick={this.showUpdateStoreDetails}
                          name="submit"
                          className="btn btn-dark"
                        >
                          Update Store Details
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
                <div className="col-md-3"></div>
              </div>
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
        <UpdateStoreDetails
          show={this.state.showUpdateStoreDetails}
          closeModal={this.hideUpdateStoreDetails}
          storeDetails={this.state.storeDetails}
        ></UpdateStoreDetails>
      </div>
    );
  }
}

export default Wall;

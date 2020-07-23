import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ViewNotificationModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notification: "You have a Notification.....",
    };
  }
  close = () => {
    this.props.closeModal("close");
  };

  deleteNotification = () => {
    let id = this.props.notification.id;
    fetch(`http://localhost:8080/api/notifications/deleteNotification/${id}`, {
      method: "PUT",
    }).then((response) => {
      this.props.closeModal("save");
    });
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
          backdrop="static"
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fas fa-bell"></i> Notification
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="notification"
                  readOnly
                  value={this.props.notification.notification}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.deleteNotification}>
              Delete
            </Button>
            <Button variant="secondary" onClick={this.close}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ViewNotificationModal;

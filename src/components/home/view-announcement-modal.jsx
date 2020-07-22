import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class ViewAnnouncementModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: "I have a Announcement.....",
    };
  }
  render() {
    const isManager = localStorage.getItem("role") === "manager";
    return (
      <div>
        <Modal
          show={this.props.show}
          backdrop="static"
          onHide={this.props.closeModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>
              <i className="fas fa-bullhorn"></i> Announcement
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="announcement"
                  readOnly
                  value={this.props.announcement}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {isManager ? (
              <Button variant="danger" onClick={this.props.closeModal}>
                Delete
              </Button>
            ) : null}
            <Button variant="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ViewAnnouncementModal;

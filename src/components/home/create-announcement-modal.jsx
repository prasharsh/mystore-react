import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class CreateAnnouncement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      announcement: "",
      validated: true,
    };
  }

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
    });
  };
  close = () => {
    this.props.closeModal("close");
  };
  save = () => {
    let announcement = {};
    announcement.announcement = this.state.announcement;
    announcement.managerId = localStorage.getItem("id");

    fetch("http://localhost:8080/api/annoucements/createAnnouncement", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(announcement),
    }).then((response) => {
      if (response.status === 200) {
        this.props.closeModal("save");
      } else {
        this.props.closeModal("SaveFailed");
      }
    });

    this.setState({ announcement: "" });
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
              <i className="fas fa-bullhorn"></i>Create Announcement
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form validated={this.state.validated}>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="announcement"
                  required
                  value={this.state.announcement}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={this.state.announcement.length === 0}
              variant="primary"
              onClick={this.save}
            >
              Save Announcement
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

export default CreateAnnouncement;

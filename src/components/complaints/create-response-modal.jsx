import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class CreateResponseModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      response: "",
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

  saveData = () => {
    var response = {};
    response.response = this.state.response;
    response.id = this.props.complaint.id;
    response.userId = this.props.complaint.userId;
    response.managerId = localStorage.getItem("id");
    fetch("http://localhost:8080/api/complaints/updateResponse", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(response),
    }).then((response) => {
      if (response.status === 200) {
        this.props.closeModal("save");
      } else {
        this.props.closeModal("SaveFailed");
      }
    });
    this.setState({ response: "" });
  };

  close = () => {
    this.props.closeModal("close");
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
              <i className="fas fa-reply"></i> Response
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.props.callAlert}
            >
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="response"
                  required
                  value={this.state.response}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.close}>
              Close
            </Button>
            <Button
              disabled={this.state.response.length === 0}
              type="submit"
              variant="primary"
              onClick={this.saveData}
            >
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateResponseModal;

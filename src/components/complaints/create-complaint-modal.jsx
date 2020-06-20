import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class CreateComplaintModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complaint: "",
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

  saveComplaint = () => {
    this.props.closeModal("save");
  };

  closeComplaint = () => {
    this.props.closeModal("close");
  };
  handleSubmit = (event) => {};
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
              <i className="fas fa-tasks"></i> Complaint
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form validated={this.state.validated} onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Complaint Type</Form.Label>
                <Form.Control as="select">
                  <option>Official</option>
                  <option>Personal</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Detail:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="complaint"
                  required
                  value={this.state.complaint}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeComplaint}>
              Close
            </Button>
            <Button variant="primary" onClick={this.saveComplaint}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CreateComplaintModal;

import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
class UpdateStoreDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      storeName: this.props.storeDetails.storeName,
      address: this.props.storeDetails.address,
      storeEmail: this.props.storeDetails.storeEmail,
      validated: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  close = () => {
    this.props.closeModal("close");
  };

  saveDetails = () => {
    let details = {};
    details.storeName = this.state.storeName;
    details.storeEmail = this.state.storeEmail;
    details.address = this.state.address;
    details.id = this.props.storeDetails.id;
    fetch("http://localhost:8080/api/storeDetails/updateStoreDetails", {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(details),
    }).then((response) => {
      if (response.status === 200) {
        this.props.closeModal("save");
      } else {
        this.props.closeModal("SaveFailed");
      }
    });
  };

  handleChange = async (event) => {
    const { target } = event;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;
    await this.setState({
      [name]: value,
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
              <i className="fas fa-edit"></i> Update Store Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form validated={this.state.validated}>
              <Form.Group controlId="exampleForm.controlText">
                <Form.Label>Store Name:</Form.Label>
                <Form.Control
                  type="text"
                  name="storeName"
                  required
                  value={this.state.storeName}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  name="address"
                  required
                  value={this.state.address}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.inputEmail">
                <Form.Label>Store Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="storeEmail"
                  required
                  value={this.state.storeEmail}
                  onChange={(e) => {
                    this.handleChange(e);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={
                this.state.address.length === 0 ||
                this.state.storeEmail.length === 0 ||
                this.state.storeName.length === 0
              }
              variant="primary"
              onClick={this.saveDetails}
            >
              Update Details
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

export default UpdateStoreDetails;

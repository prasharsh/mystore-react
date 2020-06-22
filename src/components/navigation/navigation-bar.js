import React, { Component } from "react";
import { Nav, Navbar, Form, FormControl, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "react-router";
const Styles = styled.div`
  .navbar {
    background-color: #563d7c;
  }
  a,
  .navbar-nav,
  .navbar-light .nav-link {
    color: #cbbde2;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #cbbde2;
    &:hover {
      color: white;
      background-color: transparent;
    }
  }
  .form-center {
    position: absolute !important;
    left: 33%;
    right: 25%;
  }

  .cursor-hand {
    cursor: pointer;
  }
`;
export class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = { role: "" };
  }
  componentDidMount() {
    this.retrieverole();
    console.log(this.state.role);
    console.log(this.props);
  }
  handleLogout = () => {
    this.props.updateAuth(false);
    localStorage.setItem("auth", "false");
    this.props.history.push("/");
  };
  retrieverole = () => {
    this.setState({ role: localStorage.getItem("role") });
  };
  render() {
    return (
      <Styles>
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand
            className="cursor-hand"
            onClick={() => this.props.history.push("/home/wall")}
          >
            My Store <i className="fas fa-store"></i>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link onClick={() => this.props.history.push("/home/later")}>
                Shifts <i className="fas fa-clock"></i>
              </Nav.Link> */}

              <NavDropdown title="Shift Management" id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => this.props.history.push("/home/later")}
                >
                  Provide Availablity
                </NavDropdown.Item>

                <span className="navSpan">Swap Shift</span>
                <NavDropdown.Item
                  onClick={() =>
                    this.props.history.push("/home/swapShift/create")
                  }
                >
                  Create Shift Swap Request
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() =>
                    this.props.history.push("/home/swapShift/edit")
                  }
                >
                  Edit Shift Swap Request
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() =>
                    this.props.history.push("/home/swapShift/requests")
                  }
                >
                  Shift Swap Requests
                </NavDropdown.Item>

                {this.state.role === "manager" && (
                    <span className="navSpan">Allocate Shift</span>
                  ) && (
                    <NavDropdown.Item
                      onClick={() =>
                        this.props.history.push("/home/generate-schedule")
                      }
                    >
                      Generate Shift
                    </NavDropdown.Item>
                  )}
              </NavDropdown>

              {/* <span className="p-2">|</span> */}
              <Nav.Link
                onClick={() => this.props.history.push("/home/jobPosting")}
              >
                Job Posting <i className="fas fa-newspaper"></i>
              </Nav.Link>

              {/* <span className="p-2">|</span> */}
              <Nav.Link
                onClick={() => this.props.history.push("/home/application")}
              >
                Applications <i className="fas fa-clipboard"></i>
              </Nav.Link>
              {/* <span className="p-2">|</span> */}
              <Nav.Link
                onClick={() => this.props.history.push("/home/complaints")}
              >
                Grievances <i className="fas fa-exclamation-triangle"></i>
              </Nav.Link>
              {/* <span className="p-2">|</span> */}
              <Nav.Link onClick={() => this.props.history.push("/home/later")}>
                Wages <i className="fas fa-file-invoice-dollar"></i>
              </Nav.Link>
              <Nav.Link onClick={() => this.props.history.push("/home/leave")}>
                Leave <i className="fas fa-file"></i>
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              {this.state.role === "crew" && (
                <Nav.Item>
                  <Nav.Link
                    onClick={() =>
                      this.props.history.push("/home/request-avail")
                    }
                  >
                    Request availiability
                  </Nav.Link>
                </Nav.Item>
              )}
              <Nav.Item>
                <Nav.Link
                  onClick={() => this.props.history.push("/home/profile")}
                >
                  Profile <i className="fas fa-user-cog"></i>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={this.handleLogout}>
                  Log out <i className="fas fa-sign-out-alt"></i>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

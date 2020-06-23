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
  .hover-color:hover {
    background: white;
    color: #563d7c;
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
                {/* <NavDropdown.Item
                  className="hover-color"
                  onClick={() => this.props.history.push("/home/later")}
                >
                  Provide Availablity
                </NavDropdown.Item> */}
                {this.state.role === "crew" && (
                <span className="navSpan">Swap Shift</span>)}
                {this.state.role === "crew" && (
                <NavDropdown.Item
                  className="hover-color"
                  onClick={() =>
                    this.props.history.push("/home/swapShift/create")
                  }
                >
                  Create Shift Swap Request
                </NavDropdown.Item>)}
                {this.state.role === "crew" && (
                <NavDropdown.Item
                  className="hover-color"
                  onClick={() =>
                    this.props.history.push("/home/swapShift/edit")
                  }
                >
                  Edit Shift Swap Request
                </NavDropdown.Item>
                )}
                {this.state.role === "crew" && (
                <NavDropdown.Item
                  className="hover-color"
                  onClick={() =>
                    this.props.history.push("/home/swapShift/requests")
                  }
                >
                  Shift Swap Requests
                </NavDropdown.Item>
                )}
                {this.state.role === "manager" && (
                    <span className="navSpan">Allocate Shift</span>
                  ) && (
                    <NavDropdown.Item
                      className="hover-color"
                      onClick={() =>
                        this.props.history.push("/home/generate-schedule")
                      }
                    >
                      Generate Shift
                    </NavDropdown.Item>
                  )}
              </NavDropdown>
              {/* <span className="p-2">|</span> */}
              {this.state.role === "manager" && (
                <Nav.Link
                  onClick={() => this.props.history.push("/home/jobPosting")}
                >
                  Job Posting <i className="fas fa-newspaper"></i>
                </Nav.Link>
              )}
           

              
              {/* <span className="p-2">|</span> */}
              {this.state.role === "manager" && (
                <Nav.Link
                  onClick={() =>
                    this.props.history.push("/home/application-managment")
                  }
                >
                  Applications <i className="fas fa-clipboard"></i>
                </Nav.Link>
              )}
              {/* <span className="p-2">|</span> */}{" "}
              {this.state.role === "crew" && (
                <Nav.Item>
                  <Nav.Link
                    onClick={() => this.props.history.push("/home/complaints")}
                  >
                    Grievances
                  </Nav.Link>
                </Nav.Item>
              )}
              {this.state.role === "crew" && (
                <Nav.Link
                  onClick={() => this.props.history.push("/home/resign")}
                >
                  Resign <i className="fas fa-clipboard"></i>
                </Nav.Link>
              )}
              {/* <span className="p-2">|</span> */}
              {/* <Nav.Link onClick={() => this.props.history.push("/home/later")}>
                Wages <i className="fas fa-file-invoice-dollar"></i>
              </Nav.Link> */}
               {this.state.role === "crew" && (
              <Nav.Link onClick={() => this.props.history.push("/home/leave")}>
                Leave <i className="fas fa-file"></i>
              </Nav.Link>
               )}


              <Nav.Link
                onClick={() => this.props.history.push("/home/careers")}
              >
                Careers <i className="fa fa-briefcase"></i>
              </Nav.Link>
              


              {this.state.role === "manager" && (
              <NavDropdown title="Request" id="basic-nav-dropdown">
                {this.state.role === "manager" && (
                <NavDropdown.Item
                  className="hover-color"
                  onClick={() =>
                    this.props.history.push("/home/request/leave")
                  }
                >
                  Leave
                </NavDropdown.Item>)}
                {this.state.role === "manager" && (
                <NavDropdown.Item
                  className="hover-color"
                  onClick={() =>
                    this.props.history.push("/home/request/resignation")
                  }
                >
                  Resignation
                </NavDropdown.Item>)}

                </NavDropdown>)}
              
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

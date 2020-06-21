import React, { Component } from "react";
import Login from "./components/login/login.jsx";
import Registration from "./components/login/registration.jsx";
import ForgotPassword from "./components/login/forgot_password.jsx";
import Token from "./components/login/token.jsx";
import NotFound from "./notfound.jsx";
import UnderConstruction from "./under-construction.jsx";
import { NavigationBar } from "./components/navigation/navigation-bar.js";
import "./App.css";
import Profile from "./components/navigation/profile/user-profile.jsx";
import ComplaintHome from "./components/complaints/complaint-home.jsx";
import Wall from "./components/home/home.jsx";
import ApplyLeave from "./components/leave/apply-leave.jsx";
import LeaveHistory from "./components/leave/leave-history.jsx";
import LeaveDetails from "./components/leave/leave-details.jsx";

import CreateSwap from "./components/shift/CreateSwap.jsx";
import EditSwap from "./components/shift/EditSwap.jsx";
import SwapRequests from "./components/shift/SwapRequests.jsx";
import EmployeeDashboard from "./components/employeedashboard/employeedashboard";
import CrewRequestAvail from "./components/employeedashboard/RequestAvail";
import GenerateSchedule from "./components/schedulegeneration/generateschedule";
import Schedule1 from "./components/schedulegeneration/schedulesuggest1";
import Schedule2 from "./components/schedulegeneration/schedulesuggest2";
import ScheduleSuggestions  from "./components/schedulegeneration/schedulesuggestions";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      employee:false
    };
  }
  componentDidMount() {
    console.log(localStorage.getItem("auth"));
    if (localStorage.getItem("auth") === undefined) {
      localStorage.setItem("auth", "false");
    } else if (localStorage.getItem("auth") === "true") {
      this.setState({ show: true });
    }

    if(localStorage.getItem("auth-employee") === undefined){
      localStorage.setItem("auth-employee", "false");
    }
    else if(localStorage.getItem("auth-employee") === true){
      this.setState({ employee: true });
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          {localStorage.getItem("auth") === "true" ? (
            <Route
              path="/home"
              render={(props) => (
                <NavigationBar
                  {...props}
                  isAuthed={this.state.show}
                  updateAuth={(show) => this.setState({ show })}
                />
              )}
            ></Route>
          ) : (
            <Redirect to="/" />
          )}

          <div className="App content">
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => (
                  <Login
                    {...props}
                    isAuthed={this.state.show}
                    updateAuth={(show) => this.setState({ show })}
                  />
                )}
              ></Route>
              <Route path="/sign-up" component={Registration}></Route>
              <Route path="/token" component={Token}></Route>
              <Route path="/forgot-password" component={ForgotPassword}></Route>
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/generate-schedule" component={GenerateSchedule} />
              ) : (
                <Redirect to="/" />
              )

              }
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/generate-schedule/suggestions/suggest1" component={Schedule1} />
              ) : (
                <Redirect to="/" />
              )

              }

              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/generate-schedule/suggestions/suggest2" component={Schedule2} />
              ) : (
                <Redirect to="/" />
              )

              }


              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/generate-schedule/suggestions" component={ScheduleSuggestions} />
              ) : (
                <Redirect to="/" />
              )

              }
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/request-avail" component={CrewRequestAvail} />
              ) : (
                <Redirect to="/" />
              )

              }
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home" component={EmployeeDashboard} />
              ) : (
                <Redirect to="/" />
              )

              }
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/test" component={NotFound} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/wall" component={Wall} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/later" component={UnderConstruction} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/complaints" component={ComplaintHome} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/profile" component={Profile} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/leave" component={ApplyLeave} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/leavehistory" component={LeaveHistory} />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/leavedetails" component={LeaveDetails} />
              ) : (
                <Redirect to="/" />
              )}

              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/swapShift/create" component={CreateSwap} />
              ) : (
                <Redirect to="/" />
              )}

              {localStorage.getItem("auth") === "true" ? (
                <Route path="/home/swapShift/edit" component={EditSwap} />
              ) : (
                <Redirect to="/" />
              )}

              {localStorage.getItem("auth") === "true" ? (
                <Route
                  path="/home/swapShift/requests"
                  component={SwapRequests}
                />
              ) : (
                <Redirect to="/" />
              )}
              {localStorage.getItem("auth") === "true" ? (
                <Route component={NotFound} />
              ) : (
                <Redirect to="/" />
              )}
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

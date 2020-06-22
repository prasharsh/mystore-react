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
import EmployeeDashboard from "./components/employeedashboard/employeedashboard.jsx";
import CrewRequestAvail from "./components/employeedashboard/RequestAvail.jsx";
import GenerateSchedule from "./components/schedulegeneration/generateschedule.jsx";
import Schedule1 from "./components/schedulegeneration/schedulesuggest1.jsx";
import Schedule2 from "./components/schedulegeneration/schedulesuggest2.jsx";
import ScheduleSuggestions from "./components/schedulegeneration/schedulesuggestions.jsx";
import CreateSwap from "./components/shift/CreateSwap.jsx";
import EditSwap from "./components/shift/EditSwap.jsx";
import SwapRequests from "./components/shift/SwapRequests.jsx";
import JobManagment from "./components/job/JobManagment.jsx";
import UpdateJob from "./components/job/UpdateJob.jsx";
import CreateJob from "./components/job/Createjob.jsx";
import Careers from "./components/job/Careers.jsx";
import JobDetails from "./components/job/JobDetails.jsx";
import Application from "./components/applications/Application.jsx";
import ApplicationManagment from "./components/applications/ApplicationManagment.jsx";
import ApplicationDetails from "./components/applications/ApplicationDetails.jsx";

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
    };
  }
  componentDidMount() {
    // console.log(typeof localStorage.getItem("auth"));
    if (localStorage.getItem("auth") === undefined) {
      localStorage.setItem("auth", "false");
    } else if (localStorage.getItem("auth") === "true") {
      this.setState({ show: true });
    }
  }
  render() {
    const authenticated = localStorage.getItem("auth") === "true";
    return (
      <Router>
        <div className="App">
          {authenticated ? (
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
            {authenticated ? (
              <Switch>
                <Route exact path="/home" component={Wall} />
                <Route exact path="/home/test" component={NotFound} />
                <Route exact path="/home/wall" component={Wall} />
                <Route exact path="/home/later" component={UnderConstruction} />
                <Route exact path="/home/profile" component={Profile} />
                <Route exact path="/home/leave" component={ApplyLeave} />
                <Route
                  exact
                  path="/home/leavehistory"
                  component={LeaveHistory}
                />
                <Route
                  exact
                  path="/home/leavedetails"
                  component={LeaveDetails}
                />
                <Route
                  exact
                  path="/home/generate-schedule"
                  component={GenerateSchedule}
                />
                <Route
                  exact
                  path="/home/generate-schedule/suggestions"
                  component={ScheduleSuggestions}
                />
                <Route
                  exact
                  path="/home/generate-schedule/suggestions/suggest1"
                  component={Schedule1}
                />
                <Route
                  exact
                  path="/home/generate-schedule/suggestions/suggest2"
                  component={Schedule2}
                />
                <Route
                  exact
                  path="/home/request-avail"
                  component={CrewRequestAvail}
                />
                <Route
                  exact
                  path="/home/swapShift/create"
                  component={CreateSwap}
                />
                <Route exact path="/home/swapShift/edit" component={EditSwap} />
                <Route
                  exact
                  path="/home/swapShift/requests"
                  component={SwapRequests}
                />
                <Route
                  exact
                  path="/home/complaints"
                  component={ComplaintHome}
                />
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

                <Route path="/home/careers" component={Careers} />
                <Route path="/home/job-details" component={JobDetails} />
                <Route path="/home/application" component={Application} />
                <Route path="/home/jobPosting" component={JobManagment} />
                <Route path="/home/update-job" component={UpdateJob} />
                <Route path="/home/create-job" component={CreateJob} />
                <Route
                  path="/home/application-managment"
                  component={ApplicationManagment}
                />
                <Route
                  path="/home/application-details"
                  component={ApplicationDetails}
                />
                <Route component={NotFound} />
              </Switch>
            ) : (
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
                <Route
                  path="/forgot-password"
                  component={ForgotPassword}
                ></Route>
                <Route component={NotFound} />
              </Switch>
            )}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

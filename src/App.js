import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Routes
import Home from "./components/Home";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";
import Contact from "./components/Contact";
import Terms from "./components/Terms";
import About from "./components/About";
import Help from "./components/Help";
import GuestSearch from "./components/Guest/GuestSearch";
import DashboardUser from "./components/DashboardUser";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/user" component={DashboardUser} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/terms" component={Terms} />
            <Route path="/help" component={Help} />
            <Route path="/search" component={GuestSearch} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;

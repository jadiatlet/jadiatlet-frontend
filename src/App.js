import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Routes
<<<<<<< HEAD
import Home from './components/Home'
import SignUp from './components/Signup'
import LogIn from './components/Login'
import Contact from './components/Contact'
import Terms from './components/Terms'
import About from './components/About'
import DashboardUser from './components/DashboardUser'
=======
import Home from "./components/Home";
import SignUp from "./components/Signup";
import LogIn from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import DashboardUser from "./components/DashboardUser";
>>>>>>> 80976d424a15a49ecc3dbfd00e9ff1350beae69e

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
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App

import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Routes
import Home from './components/home'
import SignUp from './components/signup'
import LogIn from './components/login'
import dashboarUser from './components/dashboard-user/course'
import About from './components/about'
import Contact from './components/contact'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div>
            <Route path="/" exact component={Home} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
            <Route path="/user" component={dashboarUser} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </Fragment>
    )
  }
}

export default App

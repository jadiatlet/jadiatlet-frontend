import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Axios from 'axios'
import Cookies from 'js-cookie'
import { connect } from 'react-redux'

import { signInAction } from './store/actions/auth'

// Routes
import Home from './components/Home'
import SignUp from './components/Signup'
import LogIn from './components/Login'
import Contact from './components/Contact'
import Terms from './components/Terms'
import About from './components/About'
import Help from './components/Help'
import GuestSearch from './components/Guest/GuestSearch'
import DashboardUser from './components/DashboardUser'

class App extends Component {
  async componentDidMount() {
    try {
      const token = Cookies.get('token')

      if (token) {
        const response = await Axios.get(`${process.env.REACT_APP_API_URL}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        if (response.status !== 500) {
          this.props.signInAction(response.data.user)
        }
      }
    } catch (err) {}
  }
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
    )
  }
}

export default connect(
  null,
  { signInAction }
)(App)

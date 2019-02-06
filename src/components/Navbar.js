import React, { Component, Fragment } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logOut } from '../store/actions/auth'

class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { isAuthenticated, user, logOut } = this.props

    return (
      <Menu secondary>
        <Menu.Item>
          <Image size="mini" src="/assets/images/logo.svg" />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Jadiatlet
        </Menu.Item>

        <Menu.Menu position="right">
          {isAuthenticated ? (
            <Fragment>
              <Menu.Item
                name="name"
                // active={activeItem === 'login'}
                onClick={this.handleItemClick}
                as={Link}
                to="/user"
              >
                {`Hi! ${user && user.first_name} ${user && user.last_name}`}
              </Menu.Item>
              <Menu.Item
                name="logout"
                // active={activeItem === 'signup'}
                onClick={logOut}
                as={Link}
                to="/"
              >
                Log Out
              </Menu.Item>
            </Fragment>
          ) : (
            <Fragment>
              <Menu.Item
                name="signup"
                active={activeItem === 'signup'}
                onClick={this.handleItemClick}
                as={Link}
                to="/signup"
              >
                Signup
              </Menu.Item>
              <Menu.Item
                name="login"
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                as={Link}
                to="/login"
              >
                Login
              </Menu.Item>
            </Fragment>
          )}
        </Menu.Menu>
      </Menu>
    )
  }
}

const maspStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isSignUpSuccess: state.auth.isSignUpSuccess
})

export default connect(
  maspStateToProps,
  { logOut }
)(Navbar)

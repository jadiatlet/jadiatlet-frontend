import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Menu, Visibility } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { logOut } from '../store/actions/auth'

const fixedMenuStyle = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.2)'
}

const menuStyle = {
  border: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  // marginBottom: "1em",
  // marginTop: "1em",
  paddingBottom: '10px',
  transition: 'box-shadow 0.5s ease, padding 0.5s ease'
}

class NavbarSticky extends Component {
  constructor(props) {
    super(props)

    this.state = { activeItem: '', menuFixed: false, overlayFixed: false }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  stickOverlay = () => this.setState({ overlayFixed: true })

  stickTopMenu = () => this.setState({ menuFixed: true })

  unStickOverlay = () => this.setState({ overlayFixed: false })

  unStickTopMenu = () => this.setState({ menuFixed: false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem, menuFixed } = this.state
    const { isAuthenticated, user, logOut } = this.props

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          secondary
          fixed={menuFixed ? 'top' : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container>
            <Menu.Item>
              <Image size="mini" src="/assets/images/logo.svg" />
            </Menu.Item>
            <Menu.Item
              name="home"
              // active={activeItem === '' || activeItem === '/'}
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
                    to={user.user_type === 'Coach' ? '/coach' : '/user'}
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
          </Container>
        </Menu>
      </Visibility>
    )
  }
}

// export default NavbarSticky
const maspStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isSignUpSuccess: state.auth.isSignUpSuccess
})

export default connect(
  maspStateToProps,
  { logOut }
)(NavbarSticky)

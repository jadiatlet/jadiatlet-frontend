import React, { Component } from 'react'
import { Menu, Image, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  state = { activeItem: '' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item>
          <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Home
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
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
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar

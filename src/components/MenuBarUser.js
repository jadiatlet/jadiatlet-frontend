import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Image, Menu } from "semantic-ui-react";

class MenuBarUser extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item>
          <Image size="small" src="/assets/userDashboard/gatot.JPG" avatar />
        </Menu.Item>
        <Menu.Item
          name="course"
          active={activeItem === "course"}
          onClick={this.handleItemClick}
          as={Link}
          to="#"
        >
          Course
        </Menu.Item>

        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={this.handleItemClick}
          as={Link}
          to="#"
        >
          Profile
        </Menu.Item>
      </Menu>
    );
  }
}

export default MenuBarUser;

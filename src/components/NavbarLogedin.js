import React, { Component } from "react";
import { Form, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

const countryOptions = [
  { text: "Jakarta Selatan" },
  { text: "Jakarta Barat" },
  { text: "Jakarta Timur" },
  { text: "Depok" }
];

const sportOptions = [
  { text: "Lempar Kuda" },
  { text: "Lompat Pendek" },
  { text: "Angkat Kunam" }
];

class NavbarLogedin extends Component {
  state = { activeItem: "" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu secondary>
        <Menu.Item>
          <Image size="mini" src="/assets/images/logo.svg" />
        </Menu.Item>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
          as={Link}
          to="/"
        >
          Jadiatlet
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item>
            <Form.Select
              placeholder="Select your country"
              options={countryOptions}
            />
          </Menu.Item>
          <Menu.Item>
            <Form.Select
              placeholder="Select your sport"
              options={sportOptions}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default NavbarLogedin;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Container, Image, Menu, Visibility } from "semantic-ui-react";

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)"
};

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  //   marginTop: "1em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

class NavbarSticky extends Component {
  state = { activeItem: "", menuFixed: false, overlayFixed: false };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem, menuFixed } = this.state;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          secondary
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container>
            <Menu.Item>
              <Image size="mini" src="/assets/images/logo.svg" />
            </Menu.Item>
            <Menu.Item
              name="home"
              active={activeItem === "" || activeItem === "/"}
              onClick={this.handleItemClick}
              as={Link}
              to="/"
            >
              Jadiatlet
            </Menu.Item>

            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item
                name="signup"
                active={activeItem === "signup"}
                onClick={this.handleItemClick}
                as={Link}
                to="/signup"
              >
                Signup
              </Menu.Item>
              <Menu.Item
                name="login"
                active={activeItem === "login"}
                onClick={this.handleItemClick}
                as={Link}
                to="/login"
              >
                Login
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
    );
  }
}

export default NavbarSticky;

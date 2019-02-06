import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Grid, Image } from "semantic-ui-react";

import "./index.css";

const Footer = () => {
  return (
    <div>
      <div className="footer-style">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column>
              <Menu text vertical>
                <Menu.Item className="footer-text-title" header>
                  <strong> Jadiatlet</strong>
                </Menu.Item>
                <Menu.Item
                  className="footer-text"
                  name="Term"
                  as={Link}
                  to="/terms"
                />
                <Menu.Item
                  className="footer-text"
                  name="About"
                  as={Link}
                  to="/about"
                />
                <Menu.Item
                  className="footer-text"
                  name="Help"
                  as={Link}
                  to="/help"
                />
                <Menu.Item
                  className="footer-text"
                  name="Contact"
                  as={Link}
                  to="/contact"
                />
              </Menu>
            </Grid.Column>
            <Grid.Column />
            <Grid.Column>
              <Image
                className="footer-image"
                src="/assets/images/logo.svg"
                size="tiny"
              />
              <p className="footer-text">Jadiatlet Ltd</p>
              <p className="footer-subtitle">admin@jadiatlet.com</p>
              <p className="footer-subtitle">+62 95360159807</p>
              <Menu text>
                <Menu.Item
                  target="_blank"
                  href="https://instagram.com/jadiatlet"
                  className="footer-icon"
                >
                  <Icon color="teal" size="large" name="instagram" />{" "}
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://github.com/jadiatlet"
                  className="footer-icon"
                >
                  <Icon color="teal" size="large" name="whatsapp" />{" "}
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://google.com/jadiatlet"
                  className="footer-icon"
                >
                  <Icon color="teal" size="large" name="google plus g" />{" "}
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://gmail.com/jadiatlet"
                  className="footer-icon"
                >
                  <Icon color="teal" size="large" name="mail" />{" "}
                </Menu.Item>
                <Menu.Item
                  target="_blank"
                  href="https://youtube.com/jadiatlet"
                  className="footer-icon"
                >
                  <Icon color="teal" size="large" name="youtube" />{" "}
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
      <div className="copyright-style">Copyright &copy; jadiatlet.com 2019</div>
    </div>
  );
};

export default Footer;

import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Divider, Menu, Header } from 'semantic-ui-react'

const InnerFooter = () => {
  return (
    <div>
      <Container>
        <Divider horizontal>
          <Header as="h5">&copy; 2019 jadiatlet</Header>
        </Divider>

        <Menu text size="tiny">
          <Menu.Item name="Home" as={Link} to="/" />
          <Menu.Item name="Social Media" href="www.youtube.com" />
          <Menu.Menu position="right">
            <Menu.Item name="Terms" as={Link} to="/terms" />
            <Menu.Item name="Help" as={Link} to="/help" />
            <Menu.Item name="About" as={Link} to="/about" />
            <Menu.Item name="Contact" as={Link} to="/contact" />
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  )
}

export default InnerFooter

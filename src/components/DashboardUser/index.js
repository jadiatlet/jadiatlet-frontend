import React from 'react'
import { connect } from 'react-redux'

import { Container, Tab, Segment, Image, Divider, Header, Label } from 'semantic-ui-react'

import NavbarLogedin from '../NavbarLogedin'
import CourseUser from './Course/index'
import ProfileUser from './Profile'

const panes = [
  {
    menuItem: 'Course',
    render: () => (
      <Tab.Pane>
        <CourseUser />
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Profile',
    render: () => (
      <Tab.Pane>
        <ProfileUser />
      </Tab.Pane>
    )
  }
]

const DashboardUser = props => {
  return (
    <div>
      <NavbarLogedin />
      <Container>
        <Segment vertical textAlign="center">
          <Image size="small" src="/assets/images/team/gatot.JPG" avatar />
          <Header as="h2">
            <Header.Content>
              {`${props.user && props.user.first_name} `}
              {props.user && props.user.last_name}
            </Header.Content>
            <Header.Subheader>
              <Label color="teal">{props.user && props.user.user_type}</Label>
            </Header.Subheader>
          </Header>
        </Segment>
        <Divider />
        <Tab panes={panes} />
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(DashboardUser)

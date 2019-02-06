import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Container, Tab, Segment, Image, Divider, Header, Label } from 'semantic-ui-react'

import InnerFooter from '../InnerFooter'
import Navbar from '../Navbar'
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
  if (!props.isAuthenticated || props.user.user_type !== 'Student') {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Container>
        <Navbar />
        <Segment vertical textAlign="center">
          <Image size="small" src={props.user && props.user.profile_picture} avatar />
          <Header as="h2">
            <Header.Content>
              {`${props.user && props.user.first_name} `}
              {props.user && props.user.last_name}
            </Header.Content>
            <Header.Subheader>
              <Label color="teal" as="a" tag>
                Student
              </Label>
            </Header.Subheader>
          </Header>
        </Segment>
        <Divider />
        <Tab panes={panes} />
        <InnerFooter />
      </Container>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isSignUpSuccess: state.auth.isSignUpSuccess,
  user: state.auth.user
})

export default connect(mapStateToProps)(DashboardUser)

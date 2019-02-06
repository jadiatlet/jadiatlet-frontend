import React from 'react'
import { connect } from 'react-redux'

import { Container, Tab, Segment, Image, Divider, Header, Label } from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'

import InnerFooter from '../InnerFooter'
import Navbar from '../Navbar'
import Trainee from './Trainee'
import CourseUser from './Course/index'
import ProfileUser from './Profile'

const panes = [
  {
    menuItem: 'Trainee',
    render: () => (
      <Tab.Pane>
        <Trainee />
      </Tab.Pane>
    )
  },
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

const DashboardCoach = props => {
  if (!props.isAuthenticated || props.user.user_type !== 'Coach') {
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
              <Label color="orange" as="a" tag>
                Coach
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
  user: state.auth.user
})

export default connect(mapStateToProps)(DashboardCoach)

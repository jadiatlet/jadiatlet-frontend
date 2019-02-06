import React from 'react'
import { connect } from 'react-redux'

import { Container, Tab, Segment, Image, Divider, Header, Label } from 'semantic-ui-react'

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
  return (
    <div>
      <Container>
        <Navbar />
        <Segment vertical textAlign="center">
          <Image size="small" src="/assets/images/team/gatot.JPG" avatar />
          <Header as="h2">
            <Header.Content>
              {`${props.user && props.user.first_name} `}
              {props.user && props.user.last_name}
            </Header.Content>
            <Header.Subheader>
              <Label color="teal" as="a" tag>
                {props.user && props.user.user_type}
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
  user: state.auth.user
})

export default connect(mapStateToProps)(DashboardCoach)

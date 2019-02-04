import React from 'react'
import { connect } from 'react-redux'

import { Container, Tab, Grid, Segment, Image, Divider, Header } from 'semantic-ui-react'

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
        <Segment>
          <Grid columns={2}>
            <Grid.Column width={2}>
              <Image size="tiny" src="/assets/images/team/gatot.JPG" avatar />
            </Grid.Column>

            <Grid.Column>
              <Header as="h1">
                <Header.Content>
                  <div>
                    {`${props.user && props.user.first_name} `}
                    {props.user && props.user.last_name}
                  </div>
                  <Header.Subheader>{props.user && props.user.user_type}</Header.Subheader>
                  <Header.Subheader>{props.user && props.user.city}</Header.Subheader>
                </Header.Content>
              </Header>
            </Grid.Column>
          </Grid>
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

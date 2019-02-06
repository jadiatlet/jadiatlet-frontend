import React, { Fragment } from 'react'
import { Segment, Table, Icon, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProfileUser = props => {
  const userDetails1 = [
    { name: 'E-Mail', data: props.user.email, icon: 'mail' },
    { name: 'City', data: props.user.city, icon: 'map marker alternate' },
    { name: 'Address', data: props.user.overview, icon: 'road' }
  ]

  const userDetails2 = [
    { name: 'Phone Number', data: props.user.phone, icon: 'phone' },
    { name: 'Selected Sport', data: props.user.sport, icon: 'volleyball ball' },
    { name: 'Overview', data: props.user.overview, icon: 'help' }
  ]

  return (
    <Fragment>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Table basic="very">
              <Table.Body>
                {userDetails1.map((user, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Icon name={user.icon} />
                        {user.name}
                      </Table.Cell>
                      <Table.Cell>{user.data}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Table basic="very">
              <Table.Body>
                {userDetails2.map((user, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell>
                        <Icon name={user.icon} />
                        {user.name}
                      </Table.Cell>
                      <Table.Cell>{user.data}</Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProfileUser)

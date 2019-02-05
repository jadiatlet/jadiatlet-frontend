import React, { Fragment } from 'react'
import { Segment, Table, Icon, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProfileUser = props => {
  const userDetails = [
    { name: 'E-Mail', data: props.user.email, icon: 'mail' },
    { name: 'Phone Number', data: props.user.phone, icon: 'phone' },
    { name: 'City', data: props.user.city, icon: 'mafoldmap marker alternateeril' },
    { name: 'Selected Sport', data: props.user.sport, icon: 'volleyball ball' },
    { name: 'Overview', data: props.user.overview, icon: 'help' }
  ]

  return (
    <Fragment>
      <Segment>
        <Table basic="very">
          <Table.Body>
            {userDetails.map((user, index) => {
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
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProfileUser)

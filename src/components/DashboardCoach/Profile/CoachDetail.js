import React, { Fragment } from 'react'
import { Divider, Segment, Table, Icon, Grid, Header } from 'semantic-ui-react'

const CoachDetail = props => {
  return (
    <Fragment>
      <Divider horizontal>
        <Header as="h5">Coach Details</Header>
      </Divider>
      <Grid stackable columns={2}>
        <Grid.Column>
          <Segment>
            <Table basic="very">
              <Table.Body>
                {props.coachDetails1.map((user, index) => {
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
                {props.coachDetails2.map((user, index) => {
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

export default CoachDetail

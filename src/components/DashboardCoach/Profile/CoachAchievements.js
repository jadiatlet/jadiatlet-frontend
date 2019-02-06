import React from 'react'
import { Divider, Button, Icon, Container, Table, Header, Segment } from 'semantic-ui-react'

const CoachAchievements = props => {
  return (
    <Segment>
      <Container textAlign="right">
        <Button color="twitter">
          <Icon name="add circle" /> Add Achievement
        </Button>
      </Container>

      <Divider horizontal>
        <Header as="h5">Coach Achievemnets</Header>
      </Divider>

      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Number</Table.HeaderCell>
            <Table.HeaderCell>Achievement Tittle</Table.HeaderCell>
            <Table.HeaderCell>Year</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>Jajang</Table.Cell>
            <Table.Cell>2017</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default CoachAchievements

import React, { Component } from 'react'
import { Divider, Button, Icon, Container, Table, Header, Segment } from 'semantic-ui-react'

import ModalAchievement from './Modal/ModalAchievement'

class CoachAchievements extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Segment>
        <ModalAchievement status={open} handleClose={this.close} />
        <Container textAlign="right">
          <Button color="twitter" onClick={this.show}>
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
}

export default CoachAchievements

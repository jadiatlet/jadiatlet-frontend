import React, { Component } from 'react'
import { Divider, Button, Icon, Container, Table, Header, Segment } from 'semantic-ui-react'

import ModalExperience from './Modal/ModalExperience'

class CoachExperiences extends Component {
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
        <ModalExperience status={open} handleClose={this.close} />
        <Container textAlign="right">
          <Button color="twitter" onClick={this.show}>
            <Icon name="add circle" /> Add Experience
          </Button>
        </Container>

        <Divider horizontal>
          <Header as="h5">Coach Experiences</Header>
        </Divider>

        <Table basic>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Number</Table.HeaderCell>
              <Table.HeaderCell>Experiences Tittle</Table.HeaderCell>
              <Table.HeaderCell>From</Table.HeaderCell>
              <Table.HeaderCell>To</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>1</Table.Cell>
              <Table.Cell>Coach Basket Scholl</Table.Cell>
              <Table.Cell>Aril 2017</Table.Cell>
              <Table.Cell>February 2018</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

export default CoachExperiences

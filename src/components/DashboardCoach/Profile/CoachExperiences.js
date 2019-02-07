import React, { Component } from 'react'
import { Divider, Button, Icon, Container, Table, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ModalExperience from './Modal/ModalExperience'
import { getCoachExperience } from '../../../store/actions/coach'

class CoachExperiences extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  componentDidMount() {
    this.props.getCoachExperience({ ...this.props.user, coachId: this.props.user.id })
  }

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
            {this.props.coach.experience &&
              this.props.coach.experience.map((experience, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{experience.title}</Table.Cell>
                    <Table.Cell>{experience.start_date}</Table.Cell>
                    <Table.Cell>{experience.end_date}</Table.Cell>
                  </Table.Row>
                )
              })}
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}

const mapStateToProps = state => ({
  coach: state.coach,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { getCoachExperience }
)(CoachExperiences)

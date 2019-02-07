import React, { Component } from 'react'
import { Divider, Button, Icon, Container, Table, Header, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

import ModalAchievement from './Modal/ModalAchievement'
import { getCoachAchievement } from '../../../store/actions/coach'
class CoachAchievements extends Component {
  constructor(props) {
    super(props)
    this.state = { open: false }
  }

  show = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  componentDidMount() {
    this.props.getCoachAchievement({ ...this.props.user, coachId: this.props.user.id })
  }

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
            {this.props.coach.achievement &&
              this.props.coach.achievement.map((achievement, index) => {
                return (
                  <Table.Row key={index}>
                    <Table.Cell>{index + 1}</Table.Cell>
                    <Table.Cell>{achievement.title}</Table.Cell>
                    <Table.Cell>{achievement.year}</Table.Cell>
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
  { getCoachAchievement }
)(CoachAchievements)

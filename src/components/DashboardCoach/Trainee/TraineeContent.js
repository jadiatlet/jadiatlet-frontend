import React, { Component, Fragment } from 'react'
import { Grid, Table, Segment, Label, Icon, Button, Divider } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { getCourse } from '../../../store/actions/course'

class TraineeContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.getCourse({ ...this.props.user, coachId: this.props.user.id })
  }

  render() {
    console.log(this.props.course.course)
    return (
      <Fragment>
        <Divider />
        <Grid centered columns={2}>
          {this.props.course &&
            this.props.course.course &&
            this.props.course.course.map((course, index) => {
              return (
                <Grid.Column floated="left" key={index}>
                  <Segment>
                    <h2>Course Description</h2>
                    <p>{course.description}</p>
                    <Table basic="very">
                      <Table.Body>
                        <Table.Row>
                          <Table.Cell>
                            <Icon name="money" />
                            Price
                          </Table.Cell>
                          <Table.Cell>{`Rp. ${course.price}`}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>
                            <Icon name="calendar check outline" />
                            Course Duration
                          </Table.Cell>
                          <Table.Cell>{`${course.start_date} - ${course.end_date}`}</Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>
                            <Icon name="time" />
                            Time
                          </Table.Cell>
                          <Table.Cell>
                            {`${course.day}, ${course.start_hour} - ${course.end_hour}`}
                          </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                          <Table.Cell>
                            <Icon name="map marker alternate" />
                            Venue
                          </Table.Cell>
                          <Table.Cell>{course.venue}</Table.Cell>
                        </Table.Row>
                      </Table.Body>
                    </Table>
                  </Segment>
                </Grid.Column>
              )
            })}

          <Grid.Column floated="right">
            <Table basic>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">Status</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing>Gatot Markunam</Table.Cell>
                  <Table.Cell collapsing textAlign="right">
                    <Label as="a">
                      <Icon name="warning sign" />
                      Pending
                    </Label>
                  </Table.Cell>
                </Table.Row>

                <Table.Row>
                  <Table.Cell collapsing>Broto Gatel</Table.Cell>
                  <Table.Cell collapsing textAlign="right">
                    <Label as="a">
                      <Icon name="check circle" />
                      Accepted
                    </Label>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Button negative>Delete</Button>
          </Grid.Column>
        </Grid>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  course: state.course,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { getCourse }
)(TraineeContent)

import React, { Component, Fragment } from 'react'
import { Grid, Table, Segment, Label, Icon, Divider } from 'semantic-ui-react'
import Axios from 'axios'
import Cookies from 'js-cookie'

import { connect } from 'react-redux'
import { getCourse } from '../../../store/actions/course'

class TraineeContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      traineeList: []
    }
  }

  componentDidMount() {
    this.props.getCourse({ coachId: this.props.user.id })

    Axios.get(`${process.env.REACT_APP_API_URL}/courses/getUserCourse/${this.props.user.id}`).then(
      response => {
        if (response.status === 200) {
          console.log(response.data.coachStudent[0].user_courses)
          this.setState({ traineeList: response.data.coachStudent[0].user_courses })
        }
      }
    )
  }

  acceptEnroll = async (e, id) => {
    const token = Cookies.get('token')

    await Axios.put(
      `${process.env.REACT_APP_API_URL}/courses/accept`,
      { id, status: '1' },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )

    const response = await Axios.get(
      `${process.env.REACT_APP_API_URL}/courses/getUserCourse/${this.props.user.id}`
    )

    if (response.status === 200) {
      console.log(response.data.coachStudent[0].user_courses)
      await this.setState({ traineeList: response.data.coachStudent[0].user_courses })
    }
  }

  render() {
    // console.log(this.props.course.course)
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
                {this.state.traineeList.map((course, index) => {
                  return (
                    <Table.Row key={index}>
                      <Table.Cell collapsing>
                        {course.user.first_name} {course.user.last_name}
                      </Table.Cell>
                      <Table.Cell collapsing textAlign="right">
                        {course.status === '0' ? (
                          <Label as="a" onClick={e => this.acceptEnroll(e, course.id)}>
                            <Icon name="warning sign" />
                            Pending
                          </Label>
                        ) : (
                          <Label as="a" color="olive">
                            <Icon name="warning sign" />
                            Accepted
                          </Label>
                        )}
                      </Table.Cell>
                    </Table.Row>
                  )
                })}
              </Table.Body>
            </Table>
            {/* <Button negative>Delete</Button> */}
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

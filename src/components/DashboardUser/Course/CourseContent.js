import React, { Fragment } from 'react'
import { Divider, Table, Label, Header, Icon, Grid, Segment } from 'semantic-ui-react'

const CourseContent = props => {
  const { course } = props.courses
  const number = course.user.phone
  const phone = number.replace('0', '62')

  return (
    <Fragment>
      <Divider />
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Segment>
            <Header as="h2">
              <Header.Content>{course.user.sport}</Header.Content>
              {props.courses.status === '0' ? (
                <Label as="a">
                  <Icon name="warning sign" /> Pending
                </Label>
              ) : (
                <Label as="a" color="olive">
                  <Icon name="check circle" />
                  Accepted
                </Label>
              )}
            </Header>
            <Table basic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="money" />
                    Price
                  </Table.Cell>
                  <Table.Cell>
                    <Label circular as="a" color="grey">
                      Rp. {course.price}
                    </Label>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="user" />
                    Coached by
                  </Table.Cell>
                  <Table.Cell>
                    {course.user.first_name} {course.user.last_name}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Label
                      color="green"
                      as="a"
                      href={`https://wa.me/${phone}?text=Hi!%20Coach%20${
                        course.user.first_name
                      },%20how%20are%20you?`}
                      target="_blank"
                    >
                      <Icon name="whatsapp" size="large" />
                      Chat Me !
                    </Label>
                  </Table.Cell>
                  <Table.Cell>{course.user.phone}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h4>Course Description</h4>
            <p>{course.description}</p>
          </Segment>
        </Grid.Column>
        <Grid.Column floated="right">
          <Segment>
            <Header as="h2">Your Schedule</Header>
            <Table>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="calendar check outline" />
                    Course Duration
                  </Table.Cell>
                  <Table.Cell>
                    {course.start_date} - {course.end_date}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="time" />
                    Time
                  </Table.Cell>
                  <Table.Cell>
                    {course.day}, {course.start_hour} - {course.end_hour}
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="map marker alternate" />
                    Location
                  </Table.Cell>
                  <Table.Cell>{course.venue}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Segment>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

export default CourseContent

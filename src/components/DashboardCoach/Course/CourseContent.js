import React, { Fragment } from 'react'
import { Divider, Table, Label, Header, Icon, Grid, Segment } from 'semantic-ui-react'

const CourseContent = () => {
  return (
    <Fragment>
      <Divider />
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Segment>
            <Header as="h2">
              <Header.Content>Badminton</Header.Content>
              <Label>Accepted</Label>
            </Header>
            <Table basic>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="money" />
                    Price
                  </Table.Cell>
                  <Table.Cell>Rp. 500.000</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="user" />
                    Coached by
                  </Table.Cell>
                  <Table.Cell>Gatot Marmanuk</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h4>Course Description</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
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
                  <Table.Cell>10/03/2019 - 10/04/2019</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="time" />
                    Time
                  </Table.Cell>
                  <Table.Cell>Senin, 08:00 - 09:30</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Icon name="map marker alternate" />
                    Location
                  </Table.Cell>
                  <Table.Cell>Stadion Agan Gatot</Table.Cell>
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

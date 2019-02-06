import React, { Fragment } from 'react'
import { Grid, Table, Segment, Label, Icon, Button } from 'semantic-ui-react'

const TraineeContent = () => {
  return (
    <Fragment>
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Segment>
            <h2>Course Description</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim.
            </p>
            <Table basic="very">
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
          <Button.Group floated="right">
            <Button negative>Delete</Button>
            <Button.Or />
            <Button positive>Edit</Button>
          </Button.Group>
        </Grid.Column>
      </Grid>
    </Fragment>
  )
}

export default TraineeContent

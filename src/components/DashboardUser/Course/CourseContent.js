import React, { Fragment } from 'react'
import { Divider, Table, Label, Header, Icon, Grid } from 'semantic-ui-react'

const CourseContent = () => {
  return (
    <Fragment>
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Table basic>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Header as="h2">
                    <Header.Content>
                      Badminton
                      <Header.Subheader>Susi Susanti</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="right">
                  <Label>Rp. 500.000</Label>
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="right">
                  <Label>Accepted</Label>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell colSpan="3">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
                  eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                  pretium quis, sem. Nulla consequat massa quis enim.
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
        <Grid.Column floated="right">
          <Table singleLine>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Icon name="calendar check outline" />
                  10/03/2019 - 10/04/2019
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="time" />
                  Senin, 08:00 - 09:30
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="map marker alternate" />
                  Stadion Agan Gatot
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
      <Divider />
    </Fragment>
  )
}

export default CourseContent

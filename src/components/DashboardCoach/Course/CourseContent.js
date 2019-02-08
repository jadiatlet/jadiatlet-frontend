import React, { Fragment, Component } from 'react'
import { Divider, Table, Label, Header, Icon, Grid } from 'semantic-ui-react'

class CourseContent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
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
                    <Label>Rp. 50000</Label>
                  </Table.HeaderCell>
                  <Table.HeaderCell textAlign="right">
                    <Label>Accepted</Label>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell colSpan="3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iure.
                    Exercitationem dolore quam beatae neque, laudantium eos{' '}
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
                    GBK
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
}

export default CourseContent

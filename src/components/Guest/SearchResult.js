import React, { Component } from 'react'
import { Segment, Grid, Image, Icon, Button, List, Table, ListItem } from 'semantic-ui-react'
import Axios from 'axios'
import Cookies from 'js-cookie'

import './Guess.css'

class SearchResult extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleClick = id_course => {
    const token = Cookies.get('token')
    Axios.post(
      `${process.env.REACT_APP_API_URL}/courses/join`,
      { id_course },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    )
      .then(response => {
        if (response.status === 200) {
          console.log(response)
        }
      })
      .catch(err => console.log(err))
  }
  render() {
    const { user } = this.props
    return (
      <Segment>
        <Grid columns={2}>
          <Grid.Row stretched>
            <Grid.Column width={8}>
              <Segment>
                <List horizontal>
                  <ListItem>
                    <Image src={user.profile_picture} size="tiny" avatar />
                  </ListItem>
                  <ListItem>
                    <h1 className="guest-title-name">{user.first_name}</h1>
                    <h5 className="guest-subtitle-name">{user.sport}</h5>
                  </ListItem>
                </List>
                {user.courses.map(course => (
                  <Segment>
                    <h3>Course Description</h3>
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
                ))}
              </Segment>
              {/* <Grid.Column floated="left" /> */}
            </Grid.Column>
            <Grid.Column width={8} floated="right">
              <Segment>
                <h2 className="guest-title-style">
                  <Icon color="yellow" name="trophy" /> Achievement
                </h2>
                <List>
                  {user.coach_achievements.map(achievement => (
                    <List.Item>
                      <h5 className="guest-subtitle-style">
                        <Icon color="teal" name="right triangle" />
                        {achievement.title}
                      </h5>
                    </List.Item>
                  ))}
                </List>
              </Segment>
              <Segment>
                <h2 className="guest-title-style">
                  <Icon color="yellow" name="star" /> Experience
                </h2>
                <List>
                  {user.coach_experiences.map(experience => (
                    <List.Item>
                      <h5 className="guest-subtitle-style">
                        <Icon color="teal" name="right triangle" />
                        {experience.title}
                      </h5>
                    </List.Item>
                  ))}
                </List>
              </Segment>
              <div>
                <Button
                  floated="right"
                  color="teal"
                  animated="fade"
                  onClick={() => this.handleClick(user.courses[0].id)}
                >
                  <Button.Content visible>Add Course</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default SearchResult

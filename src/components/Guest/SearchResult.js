import React from "react";
import { Segment, Grid, Image, Icon, Button } from "semantic-ui-react";

import "./Guess.css";

const SearchResult = ({ user }) => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column textAlign="center" width={8}>
            <Segment>
              <Image src={user.profile_picture} size="small" avatar />
              <h1 className="guest-title-style">{user.first_name}</h1>
              <h2 className="guest-subtitle-style">{user.sport}</h2>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} floated="right">
            <Segment>
              <h1 className="guest-title-style">Achievement</h1>
              <ul>
                {user.coach_achievements.slice(1).map(achievement => (
                  <li>
                    <h4 className="guest-subtitle-style">
                      {achievement.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </Segment>
            <Segment>
              <h1 className="guest-title-style">Experience</h1>
              <ul>
                {user.coach_experiences.slice(1).map(experience => (
                  <li>
                    <h4 className="guest-subtitle-style">{experience.title}</h4>
                  </li>
                ))}
              </ul>
            </Segment>
            <div>
              <Button floated="right" color="teal" animated="fade">
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
  );
};

export default SearchResult;

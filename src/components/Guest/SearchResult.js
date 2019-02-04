import React from "react";
import { Segment, Grid, Image, Icon, Button } from "semantic-ui-react";

import "./Guess.css";

const SearchResult = () => {
  return (
    <Segment>
      <Grid columns={2}>
        <Grid.Row stretched>
          <Grid.Column textAlign="center" width={8}>
            <Segment>
              <Image
                src="https://react.semantic-ui.com/images/avatar/large/nan.jpg"
                size="small"
                avatar
              />
              <h1 className="guest-title-style">Fullname of Trainer</h1>
              <h2 className="guest-subtitle-style">Sports</h2>
            </Segment>
          </Grid.Column>
          <Grid.Column width={8} floated="right">
            <Segment>
              <h1 className="guest-title-style">Achievement</h1>
              <h4 className="guest-subtitle-style">1</h4>
              <h4 className="guest-subtitle-style">2</h4>
            </Segment>
            <Segment>
              <h1 className="guest-title-style">Experience</h1>
              <h4 className="guest-subtitle-style">1</h4>
              <h4 className="guest-subtitle-style">2</h4>
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

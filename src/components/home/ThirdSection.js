import React from "react";
import { Container, Grid, Image, Divider, Icon } from "semantic-ui-react";

const ThirdSection = () => {
  return (
    <div className="third-style">
      <div className="third-title">
        <p align="center">
          " The best coaches really care about people. They have a sincere
          interest in people. "
        </p>
      </div>
      <Divider horizontal>
        <Icon name="angle down" />
      </Divider>
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Container>
            <h1 className="title-main">Jadiatlet</h1>
            <h3 className="title-secondary">One click to become an athlete</h3>
          </Container>
        </Grid.Column>
        <Grid.Column floated="right">
          <Image src="/assets/home/coach-2.png" size="medium" />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default ThirdSection;

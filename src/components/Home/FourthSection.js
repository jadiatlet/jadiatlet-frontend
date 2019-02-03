import React, { Fragment } from "react";
import { Container, Grid, Image, Divider, Icon } from "semantic-ui-react";

import "./index.css";

const FourthSection = () => {
  return (
    <Fragment>
      <div className="background-style2">
        <div className="title-inside">
          <h1 className="font-inside" >KEEP STRUGGLING</h1>
        </div>
      </div>
      <Container>
        <div className="fourth-title">
          <p align="center">
            " No coach has ever won a game by what he knows, it’s what his
            players know that counts. "
          </p>
        </div>
        <Divider horizontal>
          <Icon name="angle down" />
        </Divider>
        <Grid centered columns={2}>
          <Grid.Column floated="left">
            <Image className="picture-style" src="/assets/home/neymar.png" size="large" />
          </Grid.Column>
          <Grid.Column floated="right">
            <Container>
              <h1 className="title-main">Jadiatlet</h1>
              <h3 className="title-secondary">
                One click to become an athlete
              </h3>
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default FourthSection;

import React, { Fragment } from "react";
import { Grid, Container, Image, Divider, Icon, Step } from "semantic-ui-react";

import "./index.css";

const SecondSection = () => (
  <Fragment>
    {/* --------------------- PENJELASAN JADI ATLET----------------------------- */}

    <div className="top-style">
      <div className="third-title1">
        <p align="center">
          " A great coach can lead you to a place where you don't need him or
          her any more. "
        </p>
      </div>
      <Divider horizontal>
        <Icon name="angle down" />
      </Divider>
      {/* <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Image src="/assets/home/banner_img.png" size="large" />
        </Grid.Column>
        <Grid.Column floated="right">
          <Container>
            <h1 className="title-main">Jadiatlet</h1>
            <h3 className="title-secondary">
              Just 3 step to become an athlete
            </h3>
            <h3 className="title-slave">1. Select your sports</h3>
            <h3 className="title-slave">2. Choose and chat to your coach</h3>
            <h3 className="title-slave">3. Deal !</h3>
            <Step.Group ordered>
              <Step active>
                <Step.Content>
                  <Step.Title>Select</Step.Title>
                  <Step.Description>Choose your sprts</Step.Description>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Chat</Step.Title>
                  <Step.Description>Make appointment</Step.Description>
                </Step.Content>
              </Step>
              <Step active>
                <Step.Content>
                  <Step.Title>Deal !</Step.Title>
                </Step.Content>
              </Step>
            </Step.Group>
          </Container>
        </Grid.Column>
      </Grid> */}
      <div className='main-style' >
        <Image src="/assets/home/jadiatlet-section1.png" size="huge" />
        <h1 className="title-main2">JADIATLET</h1>
        <h3 className="title-secondary2">Just 3 step to become an athlete</h3>
      </div>
    </div>

    {/* --------------------- PARALLAX CONTENT ----------------------------- */}

    <div className="second-style">
      <div className="middle-background">
        <div className="middle-style">
          <h1 className="title-style">Play Like a Pro</h1>
        </div>
      </div>

      <div className="background-style">
        <div className="middle-style">
          <h1 className="title-style2">Act Like a Champion</h1>
        </div>
      </div>
    </div>
  </Fragment>
);

export default SecondSection;

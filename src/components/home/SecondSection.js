import React, { Fragment } from "react";
import { Divider, Grid, Container, Image } from "semantic-ui-react";

import "./index.css";

const SecondSection = () => (
  <Fragment>
    {/* --------------------- PENJELASAN JADI ATLET----------------------------- */}
    <div>
      <Container>
        <Divider horizontal>jadiatlet</Divider>
        <div className="top-style">
          <Grid centered columns={2}>
            <Grid.Column floated="left">
              <Image src="/assets/home/banner_img.png" size="large" />
            </Grid.Column>
            <Grid.Column floated="right">
              <Container>
                <h1>Lorem Ipsum</h1>
                <h3>Dorlor sit amet</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa strong. Cum
                  sociis natoque penatibus et magnis dis parturient montes.
                </p>
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      </Container>
    </div>

    {/* --------------------- PARALLAX CONTENT ----------------------------- */}
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
  </Fragment>
);

export default SecondSection;

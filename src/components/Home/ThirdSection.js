import React from "react";
import {
  Container,
  Grid,
  Image,
  Divider,
  Icon,
  Message
} from "semantic-ui-react";

const ThirdSection = () => {
  return (
    <div className="third-style1">
      <div className="third-style2">
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
              <h3 className="title-secondary">
                One click to become an athlete
              </h3>
              <p className="pharagraph-style">
                Everyone has a different sport goal. We are here to
                help you meet and break them. But it’s not just about getting
                you fit.
              </p>
              <Message
                className="message-style"
                color="black"
                icon="universal access"
                header="Unlock your potential"
                content="Your coach will help you to unlock your full sport potential."
              />
            </Container>
          </Grid.Column>
          <Grid.Column floated="right">
            <Image src="/assets/home/coach-2.png" size="medium" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default ThirdSection;

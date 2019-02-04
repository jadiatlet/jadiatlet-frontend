import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Image,
  Divider,
  Icon,
  Card,
  Reveal
} from "semantic-ui-react";

import "./index.css";

const FourthSection = () => {
  return (
    <Fragment>
      <div className="fourth-style">
        <div className="background-style2">
          <div className="title-inside">
            <h1 className="font-inside">KEEP STRUGGLING</h1>
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
          <Container>
            <h1 className="title-card" align="center">
              Meet with the professional Athlete
            </h1>
            <Grid columns={3}>
              <Grid.Row>
                <Grid.Column className="card-style">
                  <Card>
                    <Reveal animated="move">
                      <Reveal.Content visible>
                        <Image src="/assets/home/jordan2.jpg" size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src="/assets/home/jordan1.jpg" size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Michael Jordan</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2019</span>
                      </Card.Meta>
                      <Card.Description>
                        Michael Jordan is pro player basket ball.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        22 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column className="card2">
                  <Card>
                    <Reveal animated="move">
                      <Reveal.Content visible>
                        <Image src="/assets/home/conor1.jpg" size="medium" />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src="/assets/home/conor2.jpg" size="medium" />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Conor McGregor</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        22 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column className="card3">
                  <Card>
                    <Reveal animated="move">
                      <Reveal.Content visible>
                        <Image
                          src="/assets/home/ronaldinho1.jpg"
                          size="medium"
                        />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image
                          src="/assets/home/ronaldinho2.jpg"
                          size="medium"
                        />
                      </Reveal.Content>
                    </Reveal>
                    <Card.Content>
                      <Card.Header>Ronaldinho</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <a>
                        <Icon name="user" />
                        22 Friends
                      </a>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Container>
      </div>
    </Fragment>
  );
};

export default FourthSection;

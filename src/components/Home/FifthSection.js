import React from 'react'
import {
  Container,
  Grid,
  Divider,
  Card,
  Reveal,
  Image,
  Form,
  TextArea,
  Button
} from 'semantic-ui-react'

import './index.css'

const FifthSection = () => {
  return (
    <div className="fourth-style">
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
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Michael Jeffrey Jordan also known by his initials, MJ, is an American former
                    professional basketball player.
                  </Card.Description>
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
                    Conor Anthony McGregor is an Irish professional mixed martial artist and boxer.
                    He is the former Ultimate Fighting Championship (UFC) featherweight and
                    lightweight champion.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column className="card3">
              <Card>
                <Reveal animated="move">
                  <Reveal.Content visible>
                    <Image src="/assets/home/ronaldinho1.jpg" size="medium" />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image src="/assets/home/ronaldinho2.jpg" size="medium" />
                  </Reveal.Content>
                </Reveal>
                <Card.Content>
                  <Card.Header>Ronaldinho</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                    Ronaldo de Assis Moreira commonly known as Ronaldinho Gaúcho is a Brazilian
                    former professional footballer and ambassador for Barcelona. He played mostly as
                    an attacking midfielder.
                  </Card.Description>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={2}>
          <Grid.Row className="contact-style">
            <Grid.Column>
              <Container className="contact-text" textAlign="left">
                <h2>CONTACT US</h2>
                <h3>More Question ?</h3>
                <p>
                  Shoot us a message --> We'd love to hear from you and would be happy to answer any
                  questions you have!
                </p>
                <p>
                  <strong>Email : </strong> admin@jadiatlet.com
                </p>
                <p>
                  <strong>Phone : </strong> +62 95360159807
                </p>
                <p>
                  Jadiatlet Pty Ltd <br />
                  Jadiatlet Jakarta Pty Ltd
                </p>
                <p>All right reserved.</p>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Container className="contact-text">
                <Form className="form-contact">
                  <Form.Group widths="equal">
                    <Form.Input
                      fluid
                      name="first_name"
                      label="First Name"
                      placeholder="First Name"
                    />
                    <Form.Input fluid name="last_name" label="Last Name" placeholder="Last Name" />
                  </Form.Group>
                  <Form.Input fluid name="email" label="Email" placeholder="Email" />
                  <strong> Message </strong>
                  <TextArea placeholder="Tell us more" />
                  <Divider />
                  <Button floated="right" color="teal" type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default FifthSection

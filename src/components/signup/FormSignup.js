import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment, Radio } from 'semantic-ui-react'
import { styles } from 'ansi-colors'

const LoginForm = () => (
  <div className="login-form">
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/assets/images/logo-small.jpg" /> Create an account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Group widths="equal">
              <Form.Input fluid icon="user" iconPosition="left" placeholder="First Name" />
              <Form.Input fluid icon="user" iconPosition="left" placeholder="Last Name" />
            </Form.Group>
            <Form.Input fluid icon="mail" iconPosition="left" placeholder="E-mail address" />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Form.Group className="user-type" style={styles}>
              <Image src="/assets/images/whistle.svg" style={{ width: 75, height: 75 }} />
              <Image src="/assets/images/athlete.svg" style={{ width: 75, height: 75 }} />
            </Form.Group>

            <Form.Group widths="six">
              <Radio label="As a Coach" />
              <Radio label="Become an Athlete" />
            </Form.Group>

            <Button color="teal" fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already have an account? <Link to="/login">Log In</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm

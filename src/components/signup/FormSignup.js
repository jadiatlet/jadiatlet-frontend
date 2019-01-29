import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Image, Message, Segment, Radio } from 'semantic-ui-react'

import './signup.css'

const LoginForm = () => (
  <div>
    <Grid textAlign="center">
      <Grid.Column className="card-signup">
        <Message attached header="Join us !" content="Create an Account" />
        <Form attached size="medium">
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
            <Form.Group className="user-type">
              <Image src="/assets/images/whistle.svg" className="role-icon" />
              <Image src="/assets/images/athlete.svg" className="role-icon" />
            </Form.Group>

            <Form.Group className="role">
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

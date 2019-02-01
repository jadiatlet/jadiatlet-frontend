import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Image, Message, Radio } from 'semantic-ui-react'

import './signup.css'

class FormSignup extends Component {
  state = {}
  render() {
    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column className="card-signup">
            <Message header="Join us !" content="Create an Account" />
            <Form>
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
            </Form>
            <Message>
              Already have an account? <Link to="/login">Log In</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

export default FormSignup

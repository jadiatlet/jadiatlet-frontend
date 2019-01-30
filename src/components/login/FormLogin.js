import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Message } from 'semantic-ui-react'

const LoginForm = () => (
  <div>
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message header="Welcome Back Bitch!" content="Login to Your Account" />
        <Form>
          <Form.Input fluid icon="mail" iconPosition="left" placeholder="E-mail address" />
          <Form.Input
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />

          <Button color="teal" fluid size="large">
            Login
          </Button>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm

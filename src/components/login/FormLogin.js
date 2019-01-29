import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

const LoginForm = () => (
  <div className="login-form">
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="/assets/images/logo-small.jpg" /> Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
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
          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
)

export default LoginForm

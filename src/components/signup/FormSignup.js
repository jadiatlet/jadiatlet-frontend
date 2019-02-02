import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Image, Message, Radio } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { signUp } from '../../store/actions/auth'

import './signup.css'

class FormSignup extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    checked: false
  }

  handleChange = (e, { value }) => {
    this.setState({ [e.target.name]: e.target.value, value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state)
    this.props.signUp(this.state)
  }

  render() {
    const { firstName, lastName, email, password, checked } = this.state
    const { isAuthenticated, isSignUpSuccess } = this.props

    if (isSignUpSuccess) {
      return <Redirect to="/signin" />
    }

    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column className="card-signup">
            <Message header="Join us !" content="Create an Account" />
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="First Name"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
              <Form.Group className="user-type">
                <Image src="/assets/images/whistle.svg" className="role-icon" />
                <Image src="/assets/images/athlete.svg" className="role-icon" />
              </Form.Group>

              <Form.Group className="role">
                <Radio
                  label="As a Coach"
                  name="coachRole"
                  value={this.state.value === 'coach'}
                  // checked={checked}
                  onChange={this.handleChange}
                />
                <Radio
                  label="Become an Athlete"
                  name="userRole"
                  value={this.state.value === 'user'}
                  // checked={checked}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button type="submit" color="teal" fluid size="large">
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

const maspStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  isSignUpSuccess: state.auth.isSignUpSuccess
})

export default connect(
  maspStateToProps,
  { signUp }
)(FormSignup)

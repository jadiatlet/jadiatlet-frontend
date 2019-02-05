import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Message, Image, Radio } from 'semantic-ui-react'
// import ReactFilestack from 'filestack-react'

import { connect } from 'react-redux'
import { signUp } from '../../store/actions/auth'

import './signup.css'

const countryOptions = [
  { text: 'Jakarta Selatan', value: 'Jakarta Selatan' },
  { text: 'Jakarta Barat', value: 'Jakarta Barat' },
  { text: 'Jakarta Timur', value: 'Jakarta Timur' },
  { text: 'Depok', value: 'Depok' }
]

const sportOptions = [
  { text: 'Lempar Kuda', value: 'Lempar Kuda' },
  { text: 'Lompat Pendek', value: 'Lompat Pendek' },
  { text: 'Angkat Kunam', value: 'Angkat Kunam' }
]

class FormSignup extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    user_type: '',
    city: '',
    sport: ''
  }

  handleChange = (e, data) => {
    if (data) {
      this.setState({ [data.name]: data.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    console.log(this.state)
    this.props.signUp(this.state)
  }

  render() {
    const { first_name, last_name, email, password, user_type, phone, city, sport } = this.state
    const { isAuthenticated, isSignUpSuccess } = this.props

    if (isSignUpSuccess) {
      return <Redirect to="/login" />
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
                  name="first_name"
                  value={first_name}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Last Name"
                  name="last_name"
                  value={last_name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                placeholder="E-mail address"
                type="email"
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

              <Form.Input
                fluid
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                name="phone"
                value={phone}
                onChange={this.handleChange}
              />

              <Form.Group className="user-type">
                <Image src="/assets/images/whistle.svg" className="role-icon" />
                <Image src="/assets/images/athlete.svg" className="role-icon" />
              </Form.Group>

              <Form.Group className="user-type">
                <Form.Field>
                  <Radio
                    label="Coach"
                    name="user_type"
                    value="coach"
                    checked={user_type === 'coach'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label="Student"
                    name="user_type"
                    value="student"
                    checked={user_type === 'student'}
                    onChange={this.handleChange}
                  />
                </Form.Field>
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Select
                  name="city"
                  placeholder="Select your Country"
                  options={countryOptions}
                  value={city}
                  onChange={this.handleChange}
                />
                <Form.Select
                  name="sport"
                  placeholder="Select your Sport"
                  options={sportOptions}
                  value={sport}
                  onChange={this.handleChange}
                />
              </Form.Group>
              {/* 
              <ReactFilestack
                apikey={apikey}
                options={options}
                onSuccess={onSuccess}
                onError={onError}
                render={({ onPick }) => (
                  <div>
                    <strong>Find an avatar</strong>
                    <button onClick={onPick}>Pick</button>
                  </div>
                )}
              /> */}

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

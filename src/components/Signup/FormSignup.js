import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button, Form, Grid, Message, Image, Radio } from 'semantic-ui-react'
import ReactFilestack from 'filestack-react'
import Swal from 'sweetalert2'

import { connect } from 'react-redux'
import { signUp } from '../../store/actions/auth'

import './signup.css'

const countryOptions = [
  { text: 'Jakarta Raya', value: 'Jakarta Raya' },
  { text: 'Bogor', value: 'Bogor' },
  { text: 'Depok', value: 'Depok' },
  { text: 'Tanggerang', value: 'Tanggerang' },
  { text: 'Bekasi', value: 'Bekasi' }
]

const sportOptions = [
  { text: 'Athletics', value: 'Athletics' },
  { text: 'Socer', value: 'Socer' },
  { text: 'Basket Ball', value: 'Basket Ball' },
  { text: 'Skateboard', value: 'Skateboard' },
  { text: 'Badminton', value: 'Badminton' },
  { text: 'Tennis', value: 'Tennis' },
  { text: 'Volleyball', value: 'Volleyball' }
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
    sport: '',
    profile_picture: ''
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
    this.props.signUp(this.state)
    Swal.fire('Congratulation!', 'Sign Up Seccess!', 'success')
  }

  handleSuccess = result => {
    const imageUrl = result.filesUploaded[0].url

    this.setState({ profile_picture: imageUrl })
  }

  render() {
    const { first_name, last_name, email, password, user_type, phone, city, sport } = this.state
    const { isAuthenticated, isSignUpSuccess } = this.props

    if (isAuthenticated) {
      return <Redirect to="/user" />
    }

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

              <ReactFilestack
                apikey={process.env.REACT_APP_FILESTACK_API_KEY}
                buttonText="Upload Profile Picture"
                buttonClass="upload-image-btn"
                options={{
                  accept: 'image/*',
                  storeTo: {
                    location: 's3'
                  }
                }}
                onSuccess={this.handleSuccess}
              />

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

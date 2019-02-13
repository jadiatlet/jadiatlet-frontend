import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { logIn, setSignUpStatus } from '../../store/actions/auth'
import { Button, Form, Grid, Message } from 'semantic-ui-react'
import Swal from 'sweetalert2'

class LoginForm extends Component {
  state = { email: '', password: '' }

  componentDidMount() {
    if (this.props.isSignUpSuccess) {
      this.props.setSignUpStatus(false)
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.props.logIn(this.state)
    Swal.fire('Welcome!', 'Log In Success', 'success')
  }

  render() {
    const { email, password } = this.state
    const { isAuthenticated, user } = this.props

    if (isAuthenticated) {
      if (user.user_type === 'Coach') {
        return <Redirect to="/coach" />
      } else {
        return <Redirect to="/user" />
      }
    }

    return (
      <div>
        <Grid textAlign="center" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450 }}>
            <Message header="Welcome Back!" content="Login to Your Account" />
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                icon="mail"
                iconPosition="left"
                type="email"
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
                name="password"
                type="password"
                value={password}
                onChange={this.handleChange}
              />

              <Button type="submits" color="teal" fluid size="large">
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
  }
}

const mapStateToProps = state => ({
  isSignUpSuccess: state.auth.isSignUpSuccess,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { logIn, setSignUpStatus }
)(LoginForm)

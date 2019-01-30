import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Navbar from '../Navbar'
import InnerFooter from '../InnerFooter'
import FormSignup from './FormSignup'

import './signup.css'

const SignUp = () => {
  return (
    <div className="banner-image">
      <Container>
        <Navbar />
        <div className="top-signup">
          <Grid centered columns={2}>
            <Grid.Column floated="left">
              <div className="header-signup">
                <h1>Register Lo Bangsat !</h1>
                <h3>Heroes journey, start from here..</h3>
              </div>
            </Grid.Column>
            <Grid.Column floated="right">
              <FormSignup />
            </Grid.Column>
          </Grid>
        </div>
        <InnerFooter />
      </Container>
    </div>
  )
}

export default SignUp

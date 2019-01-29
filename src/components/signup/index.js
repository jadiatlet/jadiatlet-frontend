import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

import Navbar from '../Navbar'
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
                <Header as="h1" color="grey">
                  Register Lo Bangsat !
                </Header>
                <Header as="h3" color="grey">
                  Heroes journey, start from here..
                </Header>
              </div>
            </Grid.Column>
            <Grid.Column floated="right">
              <FormSignup />
            </Grid.Column>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

export default SignUp

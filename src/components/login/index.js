import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'

import Navbar from '../Navbar'
import FormLogin from './FormLogin'

import './login.css'

const LogIn = () => {
  return (
    <div className="jumbo-image">
      <Container>
        <Navbar />
        <Grid centered columns={2}>
          <Grid.Column floated="left">
            <Header as="h2">Login Bangsat</Header>
          </Grid.Column>
          <Grid.Column floated="right">
            <FormLogin />
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  )
}

export default LogIn

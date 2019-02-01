import React, { Fragment } from 'react'
import { Container, Grid } from 'semantic-ui-react'

import Navbar from '../Navbar'
import InnerFooter from '../InnerFooter'
import FormLogin from './FormLogin'

import './login.css'

const LogIn = () => {
  return (
    <Fragment>
      <div className="jumbo-image">
        <Container>
          <Navbar />
          <div className="top-login">
            <Grid centered columns={2}>
              <Grid.Column floated="left">
                <div className="header-login">
                  <h1>Gak Login Gua Tabok lu !</h1>
                  <h3>Train, Practice, be a Professioanl Athlete, Now...</h3>
                </div>
              </Grid.Column>
              <Grid.Column floated="right">
                <FormLogin />
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
      <InnerFooter />
    </Fragment>
  )
}

export default LogIn

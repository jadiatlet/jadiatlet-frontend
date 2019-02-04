import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import InnerFooter from '../../components/InnerFooter'

import './index.css'

const Help = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <div className="help-distance" />
      <Divider />
      <Container textAlign="center">
        <p className="help-header">JADIATLET</p>
      </Container>
      <Divider />
      <div className="help-distance" />
      <Container textAlign="center" className="help-mission">
        <h5>HELP</h5>
        <h2>Terms of Service</h2>
        <p>
          Maybe you <strong>Need</strong> our help.
        </p>
        <div className="help-distance" />
        <Grid columns="equal" textAlign="left">
          <Grid.Row>
            <Grid.Column>
              <p />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <InnerFooter />
    </div>
  )
}

export default Help

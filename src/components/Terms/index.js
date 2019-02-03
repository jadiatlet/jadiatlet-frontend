import React from 'react'
import { Container, Divider, Grid } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import InnerFooter from '../../components/InnerFooter'

import './index.css'

const Terms = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <div className="terms-distance" />
      <Divider />
      <Container textAlign="center">
        <p className="terms-header">JADIATLET</p>
      </Container>
      <Divider />
      <div className="terms-distance" />
      <Container textAlign="center" className="terms-mission">
        <h5>OUR TERM</h5>
        <h2>Terms of Service</h2>
        <p>
          Sorry, our terms is <strong>Under Construction,</strong> Please check leter, thanks
        </p>
        <div className="terms-distance" />
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

export default Terms

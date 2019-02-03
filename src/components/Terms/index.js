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
        <p className="about-header">JADIATLET</p>
      </Container>
      <Divider />
      <div className="about-distance" />
      <Container textAlign="center" className="about-mission">
        <h5>OUR MISION</h5>
        <h3>Develop Online Marketplace Wich Allows Users to Search & Register for Sport Classes</h3>
        <p>
          We build products for <strong>Sport Trainers and Athlete Wannabe.</strong> And those who
          aspire to become one.
        </p>
        <div className="about-distance" />
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

import React from 'react'
import { Container, Divider, Grid, Card, Image, List } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import InnerFooter from '../../components/InnerFooter'

import './index.css'

const About = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <div className="about-distance" />
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
              <Card
                header="Easy"
                BohemiaBohemiann
                meta="EZ"
                description="To be truly easy, become an athlete should be as easy as a tap or click."
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Universal"
                meta="Connection"
                description="To connect each othe, applications have to be fast from every local point."
              />
            </Grid.Column>
            <Grid.Column>
              <Card
                header="Accessible"
                meta="Design"
                description="To be accessible, great care has to go into the user experience and design."
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
      <div className="about-distance" />
      <Divider />
      <div className="about-distance" />
      <Container textAlign="center">
        <h1>OUR TEAM</h1>
      </Container>
      <div className="about-distance" />
      <Divider />

      <div className="about-distance" />
      <Grid centered columns={2}>
        <Grid.Column>
          <List>
            <List.Content>
              <Image size="small" avatar src="assets/images/team/panji.JPG" />
              <List.Header>Panji Gumelar</List.Header>
            </List.Content>
          </List>
        </Grid.Column>
      </Grid>
      <div className="about-distance" />
      <InnerFooter />
    </div>
  )
}

export default About

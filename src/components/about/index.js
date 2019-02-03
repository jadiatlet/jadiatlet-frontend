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

      <Grid centered columns={4}>
        <Grid.Column />
      </Grid>
      <Grid columns="equal">
        <Grid.Column />
        <Grid.Column width={8}>
          <List selection>
            <List.Item>
              <Image size="tiny" avatar src="assets/images/team/panji.JPG" />
              <List.Content>
                <List.Header as="h3">Panji Gumelar</List.Header>
                <List.Description>
                  <span>
                    <strong>Team Leader</strong>
                  </span>
                  <p>Software Developer who are Passionate Web or Mobile Application</p>
                </List.Description>
              </List.Content>
            </List.Item>
            <div className="about-distance" />
            <Divider />
            <div className="about-distance" />
            <List.Item>
              <Image size="tiny" avatar src="assets/images/team/adi.JPG" />
              <List.Content>
                <List.Header as="h3">Masagus Hariadi Arief</List.Header>
                <List.Description>
                  <span>
                    <strong>Team Member</strong>
                  </span>
                  <p>
                    I'am a noobie One Piece fans.. I always read One Piece manga during working on
                    my final project, Ha ha ha ha ha hayy
                  </p>
                  my journey is still a long way to complete the whole one piece chapter, maybe it
                  will take 3 more months wikwikwik
                </List.Description>
              </List.Content>
            </List.Item>
            <div className="about-distance" />
            <Divider />
            <div className="about-distance" />
            <List.Item>
              <Image size="tiny" avatar src="assets/images/team/gatot.JPG" />
              <List.Content>
                <List.Header as="h3">Azerino Yogananta Gatot Subroto</List.Header>
                <List.Description>
                  <span>
                    <strong>Team Member</strong>
                  </span>
                  <p>I'am Wibu, a japanese culture addict.. ikeh ikeh kimochi, sugoy..</p>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column />
      </Grid>
      <div className="about-distance" />
      <InnerFooter />
    </div>
  )
}

export default About

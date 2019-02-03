import React from 'react'
import { Container, Divider, Form, TextArea, Button } from 'semantic-ui-react'

import Navbar from '../../components/Navbar'
import InnerFooter from '../../components/InnerFooter'

import './index.css'

const Contact = () => {
  return (
    <div>
      <Container>
        <Navbar />
      </Container>
      <div className="contact-distance" />
      <Divider />
      <Container textAlign="center">
        <p className="contact-header">JADIATLET</p>
      </Container>
      <Divider />
      <div className="contact-distance" />
      <Container textAlign="center" className="contact-mission">
        <h5>CONTACT US</h5>
        <h2>Get In Touch</h2>
        <p>
          PLease fill out the quick form and <strong>We will be In Touch</strong> with lightning
          speed.
        </p>
        <div className="contact-distance" />
      </Container>
      <div className="about-distance" />
      <Container>
        <Form>
          <Form.Group widths="equal">
            <Form.Input fluid name="full_name" label="Full Name" placeholder="Full Name" />
            <Form.Input fluid name="email" label="Email" placeholder="Email" />
          </Form.Group>
          <TextArea placeholder="Tell us more" />
          <Divider />
          <Button fluid color="teal" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <div className="about-distance" />
      <InnerFooter />
    </div>
  )
}

export default Contact

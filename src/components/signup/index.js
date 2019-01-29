import React from 'react'
import { Container, Grid, Image } from 'semantic-ui-react'

import Navbar from '../Navbar'
import FormSignup from './FormSignup'

const SignUp = () => {
  return (
    <Container>
      <Navbar />
      <Grid centered columns={2}>
        <Grid.Column floated="left">
          <Image src="assets/images/banner_img.png" />
        </Grid.Column>
        <Grid.Column floated="right">
          <FormSignup />
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default SignUp

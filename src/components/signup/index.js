import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../Navbar'
import FormSignup from './FormSignup'

const SignUp = () => {
  return (
    <Container>
      <Navbar />
      <FormSignup />
    </Container>
  )
}

export default SignUp

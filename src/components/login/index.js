import React from 'react'
import { Container } from 'semantic-ui-react'

import Navbar from '../Navbar'
import FormLogin from './FormLogin'

const LogIn = () => {
  return (
    <Container>
      <Navbar />
      <FormLogin />
    </Container>
  )
}

export default LogIn

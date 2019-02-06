import React from 'react'
import { Container } from 'semantic-ui-react'

import NavbarSticky from '../NavbarSticky'
import SearchBar from '../SearchBar'
import SearchResult from './SearchResult'
import Footer from '../InnerFooter'

import './Guess.css'

const result = [1, 2, 3, 4]
const results = result.map(val => {
  return <SearchResult />
})

const GuestSearch = () => {
  return (
    <div className="guest-style">
      <NavbarSticky />

      <Container>
        <SearchBar />
        <span>{results}</span>
      </Container>
      <Footer />
    </div>
  )
}

export default GuestSearch

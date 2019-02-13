import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { connect } from 'react-redux'

import NavbarSticky from '../NavbarSticky'
import SearchBar from '../SearchBar'
import SearchResult from './SearchResult'
import Footer from '../InnerFooter'

import './Guess.css'

class GuestSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { results } = this.props

    return (
      <div className="guest-style">
        <NavbarSticky />

        <Container>
          <SearchBar />
          {results && results.users.map((user, index) => <SearchResult user={user} key={index} />)}
        </Container>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  results: store.search.results
})

export default connect(mapStateToProps)(GuestSearch)

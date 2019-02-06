import React, { Fragment } from 'react'

import MainSection from './MainSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import Footer from './Footer'

import './index.css'

const Home = () => {
  return (
    <Fragment>
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </Fragment>
  )
}

export default Home

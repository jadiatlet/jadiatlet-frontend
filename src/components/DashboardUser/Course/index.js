import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'

import '../index.css'
import CourseContent from './CourseContent'
import SeachBar from '../../SearchBar'

const CourseUser = () => {
  return (
    <Fragment>
      <CourseContent />
      <SeachBar />
    </Fragment>
  )
}

export default CourseUser

import React, { Fragment } from 'react'

import CourseContent from './CourseContent'
import SeachBar from '../../SearchBar'

const result = [1, 2, 3, 4];
const results = result.map(() => <CourseContent />);

const CourseUser = () => {
  return (
    <Fragment>
      <SeachBar />
      {results}
    </Fragment>
  )
}

export default CourseUser

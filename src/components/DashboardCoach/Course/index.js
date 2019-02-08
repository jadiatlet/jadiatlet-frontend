import React, { Fragment, Component } from 'react'
import { Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'

import CourseContent from './CourseContent'
// import SeachBar from "../../SearchBar";

class CourseUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courseList: []
    }
  }

  componentDidMount() {
    Axios.get(`${process.env.REACT_APP_API_URL}/courses/getCourse/${this.props.user.id}`)
      .then(response => {
        if (response.status === 200) {
          // console.log(response.data)
          this.setState({
            // courseList: response.data.user[0].courses
          })
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Fragment>
        <Button name="search" as={Link} to="/search" positive content="Search New Course" />
        <Divider />
        {/* {this.state.courseList.map((course, index) => {
          return <CourseContent courses={course} key={index} />
        })} */}
        <CourseContent />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
})

export default connect(mapStateToProps)(CourseUser)

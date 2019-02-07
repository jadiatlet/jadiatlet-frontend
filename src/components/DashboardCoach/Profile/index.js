import React, { Fragment } from 'react'
import {} from 'semantic-ui-react'
import { connect } from 'react-redux'

import CoachDetail from './CoachDetail'
import CoachAchievements from './CoachAchievements'
import CoachExperiences from './CoachExperiences'

const ProfileUser = props => {
  const coachDetails1 = [
    { name: 'E-Mail', data: props.user.email, icon: 'mail' },
    { name: 'City', data: props.user.city, icon: 'map marker alternate' },
    { name: 'Address', data: props.user.address, icon: 'road' }
  ]

  const coachDetails2 = [
    { name: 'Phone Number', data: props.user.phone, icon: 'phone' },
    { name: 'Selected Sport', data: props.user.sport, icon: 'volleyball ball' },
    { name: 'Overview', data: props.user.overview, icon: 'help' }
  ]

  return (
    <Fragment>
      <CoachDetail coachDetails1={coachDetails1} coachDetails2={coachDetails2} />
      <CoachExperiences />
      <CoachAchievements />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProfileUser)

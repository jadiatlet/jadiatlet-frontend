import React, { Fragment } from 'react'
import { Segment, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProfileUser = props => {
  return (
    <Fragment>
      <Segment>{props.user.last_name}</Segment>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(mapStateToProps)(ProfileUser)

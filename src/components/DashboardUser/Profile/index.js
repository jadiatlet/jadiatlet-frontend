import React, { Fragment } from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ProfileUser = props => {
  return (
    <Fragment>
      <Segment>
        <div>{props.id}</div>
      </Segment>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  id: state.auth.id
})

export default connect(mapStateToProps)(ProfileUser)

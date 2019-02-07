import React, { Component } from 'react'
import { Modal, Form, Button, Container, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addCoachAchievement } from '../../../../store/actions/coach'

class ModalAchievement extends Component {
  state = {
    title: '',
    year: ''
  }

  handleChange = (e, data) => {
    if (data) {
      this.setState({ [data.name]: data.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addCoachAchievement({ ...this.state, coachId: this.props.user.id })
    this.setState({
      title: '',
      year: ''
    })
  }

  render() {
    const { title, year } = this.state

    return (
      <Modal centered={false} open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Add Your Achievement</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="Achievement Title"
                  placeholder="Your Achievement Title"
                  name="title"
                  value={title}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  label="Year"
                  placeholder="Year that you get the Achievement"
                  name="year"
                  value={year}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Container textAlign="right">
                <Button type="submit" color="teal">
                  <Icon name="add" />
                  Add
                </Button>
              </Container>
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { addCoachAchievement }
)(ModalAchievement)

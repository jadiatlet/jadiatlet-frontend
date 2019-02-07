import React, { Component } from 'react'
import { Modal, Form, Button, Container, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { addCoachExperience } from '../../../../store/actions/coach'

class ModalExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      start_date: '',
      end_date: ''
    }
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
    this.props.addCoachExperience({ ...this.state, coachId: this.props.user.id })
    this.setState({
      title: '',
      start_date: '',
      end_date: ''
    })
  }

  render() {
    const { title, start_date, end_date } = this.state

    return (
      <Modal centered={false} open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Add Your Experience</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Input
                fluid
                label="Experience Title"
                placeholder="Your Experience Title"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  label="From"
                  placeholder="Month/Year"
                  name="start_date"
                  value={start_date}
                  onChange={this.handleChange}
                />
                <Form.Input
                  fluid
                  label="To"
                  placeholder="Month/Year"
                  name="end_date"
                  value={end_date}
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
  { addCoachExperience }
)(ModalExperience)

import React, { Component } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'

import { connect } from 'react-redux'
import { addCourse } from '../../../store/actions/course'

class AddCourseModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      start_date: '',
      end_date: '',
      start_hour: '',
      end_hour: '',
      description: '',
      price: '',
      venue: '',
      day: ''
    }
  }

  handleChange = (e, data) => {
    if (data) {
      this.setState({ [data.name]: data.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  handleSumbit = async e => {
    e.preventDefault()
    console.log(this.state)
    this.props.addCourse({ ...this.state, coachId: this.props.user.id })
    this.setState({
      start_date: '',
      end_date: '',
      start_hour: '',
      end_hour: '',
      description: '',
      price: 0,
      venue: '',
      day: ''
    })
  }

  render() {
    const {
      start_date,
      end_date,
      start_hour,
      end_hour,
      description,
      price,
      venue,
      day
    } = this.state

    return (
      <Modal open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Add / Edit Course</Modal.Header>

        <Modal.Content>
          <Form onSubmit={this.handleSumbit}>
            <Form.TextArea
              label="Course Description"
              placeholder="Tell more about this course description..."
              name="description"
              value={description}
              onChange={this.handleChange}
            />

            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Price"
                placeholder="Price"
                name="price"
                value={price}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Venue"
                placeholder="Venue"
                name="venue"
                value={venue}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <DateInput
                label="Start Date"
                name="start_date"
                placeholder="Start Date"
                value={start_date}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <DateInput
                label="End Date"
                name="end_date"
                placeholder="End Date"
                value={end_date}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <TimeInput
                label="Start Time"
                name="start_hour"
                placeholder="Start Time"
                value={start_hour}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <TimeInput
                label="End Time"
                name="end_hour"
                placeholder="End Time"
                value={end_hour}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Input
              fluid
              label="Day"
              placeholder="Type Your Practice Day"
              name="day"
              value={day}
              onChange={this.handleChange}
            />

            <Button type="submit" positive content="Submit">
              Submit
            </Button>
            <Button positive content="Finish" onClick={this.props.handleClose}>
              Finish
            </Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  course: state.course,
  user: state.auth.user
})

export default connect(
  mapStateToProps,
  { addCourse }
)(AddCourseModal)

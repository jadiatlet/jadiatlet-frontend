import React, { Component } from "react";
import { Modal, Button, Form } from "semantic-ui-react";
import { DateInput, TimeInput } from "semantic-ui-calendar-react";

class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: "",
      end_date: "",
      start_time: "",
      end_time: "",
      course_description: "",
      price: "",
      location: "",
      day: ""
    };
  }

  handleChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };

  handleSumbit = async e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Modal open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Add / Edit Course</Modal.Header>

        <Modal.Content>
          <Form onSubmit={this.handleSumbit}>
            <Form.TextArea
              label="Course Description"
              placeholder="Tell more about this course description..."
              name="course_description"
              value={this.state.course_description}
              onChange={this.handleChange}
            />

            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Price"
                placeholder="Price"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                label="Location"
                placeholder="Location"
                name="location"
                value={this.state.location}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <DateInput
                label="Start Date"
                name="start_date"
                placeholder="Start Date"
                value={this.state.start_date}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <DateInput
                label="End Date"
                name="end_date"
                placeholder="End Date"
                value={this.state.end_date}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group widths="equal">
              <TimeInput
                label="Start Time"
                name="start_time"
                placeholder="Start Time"
                value={this.state.start_time}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <TimeInput
                label="End Time"
                name="end_time"
                placeholder="End Time"
                value={this.state.end_time}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Input
              fluid
              label="Day"
              placeholder="Type Your Practice Day"
              name="day"
              value={this.state.day}
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
    );
  }
}

export default AddCourseModal;

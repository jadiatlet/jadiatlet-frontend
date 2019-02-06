import React, { Component } from "react";
import { Modal, Button, Form, Checkbox } from "semantic-ui-react";
import {
  DateInput,
  TimeInput,
  DateTimeInput,
  DatesRangeInput
} from "semantic-ui-calendar-react";

class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      dateTime: "",
      datesRange: ""
    };
  }
  render() {
    const labelCheckBox = [
      { value: "Senin" },
      { value: "Selasa" },
      { value: "Rabu" },
      { value: "Kamis" },
      { value: "Jumat" },
      { value: "Sabtu" },
      { value: "Minggu" }
    ];
    return (
      <Modal open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Add / Edit Course</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.TextArea
              label="Course Description"
              placeholder="Tell more about this course description..."
            />
            <Form.Group widths="equal">
              <Form.Input fluid label="Price" placeholder="Price" />
              <Form.Input fluid label="Location" placeholder="Location" />
            </Form.Group>
            <Form.Group widths="equal">
              <DateInput
                label="Start Date"
                name="Start Date"
                placeholder="Start Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
              />

              <DateInput
                label="End Date"
                name="End Date"
                placeholder="Start Date"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group widths="equal">
              <TimeInput
                widths={10}
                label="Start Time"
                name="date"
                placeholder="Start Time"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
              />
              <TimeInput
                label="End Time"
                name="date"
                placeholder="End Time"
                value={this.state.date}
                iconPosition="left"
                onChange={this.handleChange}
              />
              {/* <Form.Input fluid label="Start Time" placeholder="Start Time" />
              <Form.Input fluid label="End Time" placeholder="End Time" /> */}
            </Form.Group>
            <Form.Group widths="equal">
              {labelCheckBox.map(label => (
                <Form.Field control={Checkbox} label={label.value} />
              ))}
            </Form.Group>
          </Form>
        </Modal.Content>

        <Modal.Actions>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Finish"
            onClick={this.props.handleClose}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddCourseModal;

import React, { Component } from "react";
import { Modal, Image, Header, Button } from "semantic-ui-react";

class AddCourseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Modal open={this.props.status} onClose={this.props.handleClose}>
        <Modal.Header>Select a Photo</Modal.Header>
        <Modal.Content image>
          <Image wrapped size="medium" src="/images/avatar/large/rachel.png" />
          <Modal.Description>
            <Header>Default Profile Image</Header>
            <p>
              We've found the following gravatar image associated with your
              e-mail address.
            </p>
            <p>Is it okay to use this photo?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={this.props.handleClose}>
            Nope
          </Button>
          <Button
            positive
            icon="checkmark"
            labelPosition="right"
            content="Yep, that's me"
            onClick={this.props.handleClose}
          />
        </Modal.Actions>
      </Modal>
    );
  }
}

export default AddCourseModal;

{
  /* <Button onClick={this.show(true)}>Default</Button>
<Button onClick={this.show('inverted')}>Inverted</Button> */
}

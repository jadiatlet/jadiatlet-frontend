import React from 'react'
import { Modal, Form } from 'semantic-ui-react'

const ModalExperience = props => {
  return (
    <Modal centered={false} open={props.status} onClose={props.handleClose}>
      <Modal.Header>Add Your Experience</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                placeholder="First name"
              />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Last name"
                placeholder="Last name"
              />
            </Form.Group>
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  )
}

export default ModalExperience

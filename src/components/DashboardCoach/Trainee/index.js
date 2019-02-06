import React, { Component, Fragment } from "react";
import { Button } from "semantic-ui-react";
import TraineeContent from "./TraineeContent";

import AddCourseModal from "./AddCourseModal";

class Trainee extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  show = () => this.setState({ open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open } = this.state;

    return (
      <Fragment>
        <Button positive onClick={this.show}>
          Add Course
        </Button>
        <TraineeContent />
        <AddCourseModal status={open} handleClose={this.close} />
      </Fragment>
    );
  }
}

export default Trainee;

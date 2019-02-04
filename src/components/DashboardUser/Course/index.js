import React, { Fragment } from "react";
import { Segment } from "semantic-ui-react";

import "../index.css";
import CourseContent from "./CourseContent";

const CourseUser = () => {
  return (
    <Fragment>
      <Segment>
        <CourseContent />
      </Segment>
    </Fragment>
  );
};

export default CourseUser;

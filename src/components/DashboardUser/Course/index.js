import React, { Fragment } from "react";
import { Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import CourseContent from "./CourseContent";

const result = [1, 2, 3, 4, 4];
const results = result.map((num, index) => <CourseContent key={index} />);

const CourseUser = () => {
  return (
    <Fragment>
      <Button
        name="search"
        as={Link}
        to="/search"
        positive
        content="Search New Course"
      />
      <Divider />
      {results}
    </Fragment>
  );
};

export default CourseUser;

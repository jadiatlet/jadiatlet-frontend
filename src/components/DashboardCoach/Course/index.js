import React, { Fragment } from "react";
import { Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

import CourseContent from "./CourseContent";
// import SeachBar from "../../SearchBar";

const result = [1, 2, 3, 4];
const results = result.map(() => <CourseContent />);

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

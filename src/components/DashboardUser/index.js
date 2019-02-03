import React from "react";

import { Container, Tab } from "semantic-ui-react";

import CourseUser from "./Course/index";
import ProfileUser from "./Profile";
import NavbarLogedin from "../NavbarLogedin";

const panes = [
  {
    menuItem: "Course",
    render: () => (
      <Tab.Pane>
        <CourseUser />
      </Tab.Pane>
    )
  },
  {
    menuItem: "Profile",
    render: () => (
      <Tab.Pane>
        <ProfileUser />
      </Tab.Pane>
    )
  }
];

const DashboardUser = () => {
  return (
    <div>
      <NavbarLogedin />
      <Container>
        <Tab panes={panes} />
      </Container>
    </div>
  );
};

export default DashboardUser;

import React from "react";

import { Container, Tab } from "semantic-ui-react";

import NavbarLogedin from "../NavbarLogedin";
import Avatar from "../Avatar";
import CourseUser from "./Course/index";
import ProfileUser from "./Profile";

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
        <Avatar />
        <Tab panes={panes} />
      </Container>
    </div>
  );
};

export default DashboardUser;

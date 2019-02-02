import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";

import NavbarLogedin from "../../NavbarLogedin";
import MenuBarUSer from "../../MenuBarUser";
import "../index.css";

const dashboarUser = () => {
  return (
    <Fragment>
      <Container>
        <NavbarLogedin />
        <div className="userCourseBackgroud">
          <MenuBarUSer />
          <div className="mainSection">
            <span>its just temporary</span>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default dashboarUser;

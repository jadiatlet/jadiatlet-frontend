import React, { Fragment } from "react";
import { Image, Grid, Container, Divider, GridColumn } from "semantic-ui-react";

import NavbarSticky from "../NavbarSticky";
// import MenuBarUser from "../MenuBarUser";
// import Navbar from "../Navbar";

import FormOnHome from "./FormOnHome";
import TopSection from "./TopSection";

import "./index.css";

const Home = () => {
  return (
    <div>
      <div className="homeBackground">
        <NavbarSticky />

        <Grid centered columns={2}>
          <Grid.Column className="form-style" floated="left">
            <FormOnHome />
          </Grid.Column>
        </Grid>
      </div>
      <Container>
        <Divider horizontal>jadiatlet</Divider>
        <TopSection />
      </Container>
      <div className="top-background"> Play Like Pro </div>
      <Container>
        {/* <div className="middle-background"></div> */}
      </Container>
    </div>
  );
};

export default Home;

import React, { Fragment } from "react";
import { Image, Grid, Container, Divider } from "semantic-ui-react";

import NavbarSticky from "../NavbarSticky";
// import MenuBarUser from "../MenuBarUser";
// import Navbar from "../Navbar";

import FormOnHome from "./FormOnHome";

import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <div className="homeBackground">
        <NavbarSticky />

        <Grid centered columns={2}>
          <Grid.Column floated="right">
            {/* <Image src="/assets/home/banner_img.png" alt="" /> */}
          </Grid.Column>

          <Grid.Column floated="left">
            <FormOnHome />
          </Grid.Column>
        </Grid>
      </div>
      {/* <Container>
        <Divider horizontal>jadiatlet</Divider>
      </Container> */}
    </Fragment>
  );
};

export default Home;

import React, { Fragment } from "react";
import { Image, Grid, Container } from "semantic-ui-react";

import Navbar from "../Navbar";
import FormOnHome from "./FormOnHome";

import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Navbar />
      </Container>
      <div className="homeBackground">
        <Grid centered columns={2}>
          <Grid.Column floated="left">
            <Image src="/assets/home/banner_img.png" alt="" />
          </Grid.Column>

          <Grid.Column floated="right">
            <FormOnHome />
          </Grid.Column>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Home;

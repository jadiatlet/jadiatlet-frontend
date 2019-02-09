import React, { Fragment } from "react";
import { Container, Grid } from "semantic-ui-react";

import NavbarSticky from "../NavbarSticky";
import InnerFooter from "../InnerFooter";
import FormSignup from "./FormSignup";

const SignUp = () => {
  return (
    <Fragment>
      <div className="banner-image">
        <NavbarSticky />
        <Container>
          <div className="top-signup">
            <Grid centered columns={2}>
              <Grid.Column floated="left">
                <div className="header-signup">
                  <h1>Create an Account Here</h1>
                  <h3>Heroes journey, start from here..</h3>
                </div>
              </Grid.Column>
              <Grid.Column floated="right">
                <FormSignup />
              </Grid.Column>
            </Grid>
          </div>
        </Container>
      </div>
      <InnerFooter />
    </Fragment>
  );
};

export default SignUp;

import React, { Fragment } from "react";
import { Grid, Segment, Image } from "semantic-ui-react";

const Avatar = () => {
  return (
    <Fragment>
      <Segment>
        <Grid columns={2} divided>
          <Grid.Column width={2}>
            <Image size="tiny" src="/assets/images/team/gatot.JPG" avatar />
          </Grid.Column>

          <Grid.Column>
            <h1>Gatot Sugatot</h1>
          </Grid.Column>
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default Avatar;

import React from "react";
import { Grid, Button, Form, Header } from "semantic-ui-react";

import "./index.css";

const countryOptions = [
  { text: "Jakarta Selatan" },
  { text: "Jakarta Barat" },
  { text: "Jakarta Timur" },
  { text: "Depok" }
];

const sportOptions = [
  { text: "Lempar Kuda" },
  { text: "Lompat Pendek" },
  { text: "Angkat Kunam" }
];

const FormOnHome = () => (
  <div className="container-FormOnHome">
    <Header className="section-title" as="h1">
      Ready for Jadi Atlet ?
    </Header>

    <Form success  >
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Form.Select
              label="Select your location"
              placeholder="Select your country"
              options={countryOptions}
            />

            <Form.Select
              label="Select your sport"
              placeholder="Select your sport"
              options={sportOptions}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Button>Search</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Form>
  </div>
);

export default FormOnHome;

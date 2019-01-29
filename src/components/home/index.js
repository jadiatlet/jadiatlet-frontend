import React, { Fragment } from "react";
import Navbar from "../Navbar";

import { Header } from "semantic-ui-react";
import { Button, Form, Container } from "semantic-ui-react";

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

const Home = () => {
  return (
    <Fragment>
      <Container>
        <Navbar />
      </Container>

      <div className="homeBackground">
        <section className="homeSection">
          <div className="left-side">
            <img src="/assets/home/banner_img.png" alt="" />
          </div>

          <div className="right-side">
            <Header className="section-title" as="h1">
              Ready for Jadi Atlet ?
            </Header>

            <Form success>
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

              <Button>Search</Button>
            </Form>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Home;

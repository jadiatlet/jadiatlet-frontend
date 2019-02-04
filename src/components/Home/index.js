import React, { Fragment } from "react";

import MainSection from "./MainSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
// import NavbarSticky from "../NavbarSticky";

import "./index.css";

const Home = () => {
  return (
    <Fragment>
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </Fragment>
  );
};

export default Home;

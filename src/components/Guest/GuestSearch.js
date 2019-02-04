import React, { Fragment } from "react";
import { Segment, Container } from "semantic-ui-react";

import NavbarSticky from "../NavbarSticky";
import SearchBar from "../SearchBar";
import SearchResult from "./SearchResult";

const GuestSearch = () => {
  return (
    <Fragment>
      <NavbarSticky />

      <Container>
        <SearchBar />

        <SearchResult />
      </Container>
    </Fragment>
  );
};

export default GuestSearch;

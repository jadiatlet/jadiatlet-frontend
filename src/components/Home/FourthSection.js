import React, { Fragment } from "react";
import {
  Container,
  Grid,
  Image,
  Divider,
  Icon,
  Card,
  Reveal
} from "semantic-ui-react";

import "./index.css";

const FourthSection = () => {
  return (
    <Fragment>
      <div className="fourth-style">
        <div className="background-style2">
          <div className="title-inside">
            <h1 className="font-inside">KEEP STRUGGLING</h1>
          </div>
        </div>
        <Container>
          <div className="fourth-title">
            <p align="center">
              " No coach has ever won a game by what he knows, it’s what his
              players know that counts. "
            </p>
          </div>
          <Divider horizontal>
            <Icon name="angle down" />
          </Divider>
          <div className="fifth-style">
            <Container>
              <div className="box-style">
                {/* <h1 className="box-title">JADIATLET</h1> */}
                <Image src="/assets/home/jadiatlet-section.png" size='massive' /> 
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default FourthSection;

// import React, { Component } from "react";
import React from "react";
import { Grid, Button, Header, Icon } from "semantic-ui-react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavbarSticky from "../NavbarSticky";
import "./index.css";

const MainSection = () => {
  return (
    <div className="homeBackground">
      <NavbarSticky />
      <Grid centered columns={2}>
        <Grid.Column className="form-style" floated="left">
          <div className="container-FormOnHome">
            <Header className="section-title" as="h1">
              Ready for Jadi Atlet ?
            </Header>

            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Button
                    color="teal"
                    floated="left"
                    animated
                    as={Link}
                    to="/search"
                  >
                    <Button.Content visible>Search New Course</Button.Content>
                    <Button.Content hidden>
                      <Icon name="search" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default MainSection;

// class MainSection extends Component {
//   state = {
//     city: "",
//     sport: ""
//   };

//   handleChange = (e, data) => {
//     if (data) {
//       this.setState({ [data.name]: data.value });
//     } else {
//       this.setState({ [e.target.name]: e.target.value });
//     }
//   };

//   handleSubmit = async e => {
//     e.preventDefault();
//     this.props.searchValue(this.state);
//     console.log(this.state);
//   };

//   render() {
//     const { city, sport } = this.state;

//     return (
//       <div className="homeBackground">
//         <NavbarSticky />

//         <Grid centered columns={2}>
//           <Grid.Column className="form-style" floated="left">
//             <div className="container-FormOnHome">
//               <Header className="section-title" as="h1">
//                 Ready for Jadi Atlet ?
//               </Header>

//               <Form onSubmit={this.handleSubmit} success>
//                 <Grid>
//                   <Grid.Row>
//                     <Grid.Column width={10}>
//                       <Form.Select
//                         name="city"
//                         label="Select your location"
//                         placeholder="Select your country"
//                         value={city}
//                         onChange={this.handleChange}
//                         options={countryOptions}
//                       />

//                       <Form.Select
//                         name="sport"
//                         label="Select your sport"
//                         placeholder="Select your sport"
//                         value={sport}
//                         onChange={this.handleChange}
//                         options={sportOptions}
//                       />
//                     </Grid.Column>
//                   </Grid.Row>

//                   <Grid.Row>
//                     <Grid.Column>
//                       <Button
//                         type="submit"
//                         color="teal"
//                         floated="left"
//                         animated
//                       >
//                         <Button.Content visible>Search</Button.Content>
//                         <Button.Content hidden>
//                           <Icon name="search" />
//                         </Button.Content>
//                       </Button>
//                     </Grid.Column>
//                   </Grid.Row>
//                 </Grid>
//               </Form>
//             </div>
//           </Grid.Column>
//         </Grid>
//       </div>
//     );
//   }
// }

// const maspStateToProps = state => ({
//   search: state.search.searchValue,
//   isAuthenticated: state.auth.isAuthenticated,
//   user: state.auth.user,
//   isSignUpSuccess: state.auth.isSignUpSuccess
// });

// export default connect(
//   maspStateToProps,
//   { searchValue }
// )(MainSection);

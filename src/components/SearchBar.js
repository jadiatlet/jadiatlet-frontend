import React, { Fragment, Component } from "react";
import { Grid, Button, Form, Segment, Icon } from "semantic-ui-react";
import { connect } from "react-redux";

import { searchValue } from '../store/actions/search';

const countryOptions = [
  { text: "Jakarta Selatan", value: "Jakarta Selatan" },
  { text: "Jakarta Barat", value: "Jakarta Barat" },
  { text: "Jakarta Timur", value: "Jakarta Timur" },
  { text: "Depok", value: "Depok" }
];

const sportOptions = [
  { text: "Lempar Kuda", value: "Lempar Kuda" },
  { text: "Lompat Pendek", value: "Lompat Pendek" },
  { text: "Angkat Kunam", value: "Angkat Kunam" }
];

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      sport: ""};
  }

  handleChange = (e, data) => {
    if (data) {
      this.setState({[data.name]: data.value});
    } else {
      this.setState({[e.target.name]: e.target.value});
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.props.searchValue(this.state);
    console.log(this.state);
  };

  render() {
    const {city, sport} = this.state;

    return (
      <Fragment>
        <Segment>
          <Form onSubmit={this.handleSubmit} success>
            <Grid>
              <Grid.Row columns={2}>
                <Grid.Column>
                  <Form.Select
                    name='city'
                    value={city}
                    onChange={this.handleChange}
                    label="Select your location"
                    placeholder="Select your country"
                    options={countryOptions}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Form.Select
                    name='sport'
                    value={sport}
                    onChange={this.handleChange}
                    label="Select your sport"
                    placeholder="Select your sport"
                    options={sportOptions}
                  />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <Button type='submit' color="teal" floated="right" animated>
                    <Button.Content visible>Search</Button.Content>
                    <Button.Content hidden>
                      <Icon name="search" />
                    </Button.Content>
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

const maspStateToProps = state => ({
  search: state.search.searchValue
});

export default connect(
  maspStateToProps,
  { searchValue }
)(SearchBar);

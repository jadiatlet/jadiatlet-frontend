import React, { Fragment } from 'react'
import { Grid, Button, Form, Segment, Icon } from 'semantic-ui-react'

const countryOptions = [
  { text: 'Jakarta Selatan', value: 'Jakarta Selatan' },
  { text: 'Jakarta Barat', value: 'Jakarta Barat' },
  { text: 'Jakarta Timur', value: 'Jakarta Timur' },
  { text: 'Depok', value: 'Depok' }
]

const sportOptions = [
  { text: 'Lempar Kuda', value: 'Lempar Kuda' },
  { text: 'Lompat Pendek', value: 'Lompat Pendek' },
  { text: 'Angkat Kunam', value: 'Angkat Kunam' }
]

const SearchBar = () => {
  return (
    <Fragment>
      <Segment>
        <Form success>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Form.Select
                  label="Select your location"
                  placeholder="Select your country"
                  options={countryOptions}
                />
              </Grid.Column>
              <Grid.Column>
                <Form.Select
                  label="Select your sport"
                  placeholder="Select your sport"
                  options={sportOptions}
                />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                <Button color="teal" floated="right" animated>
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
  )
}

export default SearchBar

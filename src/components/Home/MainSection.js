import React from 'react'
import { Grid, Button, Form, Header, Icon } from 'semantic-ui-react'
import { connect } from 'react-redux'

import NavbarSticky from '../NavbarSticky'
import './index.css'

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

const MainSection = props => {
  // const { isAuthenticated, user, isSignUpSuccess } = props

  return (
    <div className="homeBackground">
      <NavbarSticky />

      <Grid centered columns={2}>
        <Grid.Column className="form-style" floated="left">
          <div className="container-FormOnHome">
            <Header className="section-title" as="h1">
              Ready for Jadi Atlet ?
            </Header>

            <Form success>
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
                    <Button color="teal" floated="left" animated>
                      <Button.Content visible>Search</Button.Content>
                      <Button.Content hidden>
                        <Icon name="search" />
                      </Button.Content>
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  )
}

const maspStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  isSignUpSuccess: state.auth.isSignUpSuccess
})

export default connect(maspStateToProps)(MainSection)

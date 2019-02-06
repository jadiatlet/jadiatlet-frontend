import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'

export const signUp = data => dispatch => {
  Endpoint.post('/auth/signup', data)
    .then(response => {
      if (response.status === 200) {
        dispatch(setSignUpStatus(true))
      }
    })
    .catch(err => {
      console.log(err)
      dispatch(setSignUpStatus(false))
    })
}

export const setSignUpStatus = value => ({
  type: 'SET_SIGN_UP_STATUS',
  payload: value
})

export const signInAction = user => ({
  type: 'SIGN_IN',
  payload: user
})

export const logIn = data => dispatch => {
  Endpoint.post('/auth/login', data)
    .then(response => {
      if (response.status === 200) {
        Cookies.set('token', response.data.token, { expires: 7 })
        dispatch(signInAction(response.data.user))
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const logOut = () => dispatch => {
  Cookies.remove('token')

  dispatch({
    type: 'SIGN_OUT'
  })
}

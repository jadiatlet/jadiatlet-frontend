import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'
// import { dispatch } from 'rxjs/internal/observable/range'

export default (signUp = data => dispatch => {
  Endpoint.post('/auth/signup', data)
    .then(response => {
      if (response.status === 200) {
        dispatch({
          type: 'SET_SIGN_UP_STATUS',
          payload: true
        })
      }
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: 'SET_SIGN_UP_STATUS',
        payload: false
      })
    })
})

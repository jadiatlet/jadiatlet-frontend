import jadiatletBackend from '../apis/jadiatletBackend'
import Cookies from 'js-cookie'
import { dispatch } from 'rxjs/internal/observable/range'

export default (signUp = data => async dispatch => {
  const response = await jadiatletBackend.get('/', data)
  console.log(response)
})

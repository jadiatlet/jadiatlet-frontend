import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'

export const userProfile = (data = dispatch => {
  Endpoint.get('/users/')
})

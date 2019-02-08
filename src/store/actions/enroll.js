import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'

export const addCourse = data => dispatch => {
  const token = Cookies.get('token')
  console.log(data)
  Endpoint.post(`/courses/join`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      if (response.status === 200) {
      }
    })
    .catch(err => console.log(err))
}

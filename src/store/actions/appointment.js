import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'

export const appointment = (id, status) => dispatch => {
  const token = Cookies.get('token')
  Endpoint.put(
    `${process.env.REACT_APP_API_URL}/courses/accept`,
    { id, status },
    {
      headers: { Authorization: `Bearer ${token}` }
    }
  )
    .then(() => dispatch({ type: 'ACCEPT_COURSE' }))
    .catch(err => console.log(err))
}

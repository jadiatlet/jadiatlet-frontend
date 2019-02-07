import Endpoint from '../apis/Endpoint'
import Cookies from 'js-cookie'

export const addCoachExperience = data => dispatch => {
  const token = Cookies.get('token')
  Endpoint.post(`/users/${data.coachId}/experience`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: 'ADD_COACH_EXPERIENCE', payload: response.data.experience })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const addCoachAchievement = data => dispatch => {
  const token = Cookies.get('token')
  Endpoint.post(`/users/${data.coachId}/achievement`, data, {
    headers: { Authorization: `Bearer ${token}` }
  })
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: 'ADD_COACH_ACHIEVEMENT', payload: response.data.newAchievement })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export const getCoachExperience = data => dispatch => {
  Endpoint.get(`/users/${data.coachId}/experience`, data)
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: 'GET_COACH_EXPERIENCE', payload: response.data.experience })
      }
    })
    .catch(err => console.log(err))
}

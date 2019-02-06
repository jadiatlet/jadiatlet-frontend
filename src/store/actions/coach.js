import Endpoint from '../apis/Endpoint'
// import Cookies from 'js-cookie'

export const addCoachAchievement = data => dispatch => {
  Endpoint.post(`/users/${data.coachId}/achievement`, data)
    .then(response => {
      if (response.status === 200) {
        dispatch({ type: 'ADD_COACH_ACHIEVEMENT', payload: response.data.newAchievement })
      }
    })
    .catch(err => {
      console.log(err)
    })
}

export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COACH_EXPERIENCE':
      return { ...state }
    case 'ADD_COACH_ACHIEVEMENT':
      return { ...state }
    case 'GET_COACH_EXPERIENCE':
      return { ...state, experience: action.payload }
    case 'GET_COACH_ACHIEVEMENT':
      return { ...state, achievement: action.payload }
    default:
      return state
  }
}

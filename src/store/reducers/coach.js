export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COACH_ACHIEVEMENT':
      return { ...state, achievement: action.payload }
    default:
      return state
  }
}

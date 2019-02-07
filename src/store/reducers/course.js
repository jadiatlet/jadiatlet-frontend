export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return { ...state }
    case 'GET_COURSE':
      return { ...state, course: action.payload }
    default:
      return state
  }
}

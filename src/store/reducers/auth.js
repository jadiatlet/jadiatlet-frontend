const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIGN_UP_STATUS':
      return { ...state, isSignUpSuccess: action.payload }
    case 'SIGN_IN':
      return { ...state, isAuthenticated: true }
    default:
      return state
  }
}

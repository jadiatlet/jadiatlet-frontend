const initialState = {
  isAuthenticated: false,
  isSignUpSuccess: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SIGN_UP_STATUS':
      return { isSignUpSuccess: action.payload }
    default:
      return state
  }
}

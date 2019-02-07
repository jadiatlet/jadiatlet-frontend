const initialState = { results: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_VALUE":
      return { ...state, results: action.payload };
    default:
      return state;
  }
};

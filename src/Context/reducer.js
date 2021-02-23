// Selector
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_SEARCH_NAME":
      return {
        ...state,
        searchName: action.payload,
      };
    case "SET_SEARCH_OBJECT":
      return {
        ...state,
        searchObject: action.payload,
      };
    case "SET_SORTED_X_VALUE":
      return {
        ...state,
        sortedXValues: action.payload,
      };
    case "SET_SORTED_Y_VALUE":
      return {
        ...state,
        sortedYValues: action.payload,
      };
    case "SET_SEARCH_OBJECT_QUOTE":
      return {
        ...state,
        searchObjectQuote: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

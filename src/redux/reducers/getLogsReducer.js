const initialState = {
  logItems: [],
  loading: false,
  error: null,
};

const getuserlogss = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOGS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_LOGS_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "FETCH_LOGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getuserlogss;

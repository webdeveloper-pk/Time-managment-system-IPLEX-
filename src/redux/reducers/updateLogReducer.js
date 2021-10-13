const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const updatelogsposts = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_LOG_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "UPDATE_LOG_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "UPDATE_LOG_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updatelogsposts;

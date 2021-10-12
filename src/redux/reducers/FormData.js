const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SIGNUP_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "FETCH_SIGNUP_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default posts;

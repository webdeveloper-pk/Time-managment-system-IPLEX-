
const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const updatemanagerposts = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "UPDATE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "UPDATE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default updatemanagerposts;

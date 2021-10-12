const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const deleteuserposts = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default deleteuserposts;

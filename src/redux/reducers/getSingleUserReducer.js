const initialState = {
  logItems: [],
  loading: false,
  error: null,
};

const getsingleuser = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SINGLE_USERS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_SINGLE_USERS_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "FETCH_SINGLE_USERS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getsingleuser;

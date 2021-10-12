const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const createuserss = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_LOGS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "CREATE_LOGS_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "CREATE_LOGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default createuserss;

const initialState = {
  postItems: [],
  loading: false,
  error: null,
};

const workhourslogs = (state = initialState, action) => {
  switch (action.type) {
    case "WORK_HOURS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "WORK_HOURS_SUCCESS":
      return {
        ...state,
        loading: false,
        postItems: action.payload,
      };
    case "WORK_HOURS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default workhourslogs;

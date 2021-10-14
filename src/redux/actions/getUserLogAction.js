import axios from "axios";

const getUserLogs = () => async (dispatch) => {
  const userToken = localStorage.getItem("token");
  dispatch(requestPosts());
  try {
    await axios
      .get("http://34.210.129.167/api/work-logs", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const userLogss = res.data;
        dispatch({ type: "FETCH_LOGS_SUCCESS", payload: userLogss });
      });
  } catch (error) {
    dispatch({ type: "FETCH_LOGS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "FETCH_LOGS_REQUEST",
  };
};

const exportObject = {
  getUserLogs,
  requestPosts,
};
export default exportObject;

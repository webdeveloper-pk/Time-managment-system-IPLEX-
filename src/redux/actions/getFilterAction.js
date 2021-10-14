import axios from "axios";

const getUserFilterPost = () => async (dispatch) => {
  const userToken = localStorage.getItem("token");

  dispatch(requestPosts());
  try {
    await axios
      .get("http://34.210.129.167/api/work-logs/2021-08-01/2021-08-04", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const userFilterData = res.data;
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: userFilterData });
      });
  } catch (error) {
    dispatch({ type: "FETCH_USERS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "FETCH_USERS_REQUEST",
  };
};

const exportObject = {
  getUserFilterPost,
  requestPosts,
};
export default exportObject;

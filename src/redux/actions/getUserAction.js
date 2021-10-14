import axios from "axios";

const getUserPost = () => async (dispatch) => {
  const userToken = localStorage.getItem("token");
  dispatch(requestPosts());
  try {
    await axios
      .get("http://34.210.129.167/api/users", {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: userData });
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
  getUserPost,
  requestPosts,
};
export default exportObject;

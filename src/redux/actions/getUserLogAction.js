import axios from "axios";

const getUserLogs = (user) => async (dispatch) => {

  const userToken = localStorage.getItem("token");
  console.log("user log token", userToken);

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
        console.log(res);
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: userLogss });
        localStorage.setItem(
          "login",
          JSON.stringify({
            token: res.data.token,
          })
        );
      });
  } catch (error) {
    dispatch({ type: "FETCH_POSTS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

const exportObject = {
  getUserLogs,
  requestPosts,
};
export default exportObject;

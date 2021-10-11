import axios from "axios";

const getUserPost = (user) => async (dispatch) => {

  const userToken = localStorage.getItem("token");
  console.log("token", userToken);

  dispatch(requestPosts());
  try {
    await axios
      .get(
        "http://34.210.129.167/api/users",
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const userData = res.data;
        console.log(res);
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: userData });
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
  getUserPost,
  requestPosts,
};
export default exportObject;

import axios from "axios";

const getSingleUserPost = (id) => async (dispatch) => {
  const userToken = localStorage.getItem("token");
  console.log("token", userToken);

  dispatch(requestPosts());
  try {
    await axios
      .get(`http://34.210.129.167/api/users?${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const userData = res.data;
        console.log(res);
        dispatch({ type: "FETCH_SINGLE_USERS_SUCCESS", payload: userData });
      });
  } catch (error) {
    dispatch({ type: "FETCH_SINGLE_USERS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "FETCH_SINGLE_USERS_REQUEST",
  };
};

const exportObject = {
  getSingleUserPost,
  requestPosts,
};
export default exportObject;

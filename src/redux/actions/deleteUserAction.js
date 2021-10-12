import axios from "axios";

const deleteUser = (id) => async (dispatch) => {
  // getting token from login
  const userToken = localStorage.getItem("token");
  console.log("token", userToken);
  dispatch(requestPosts());
  try {
    await axios
      .delete(`http://34.210.129.167/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((res) => {
        const deleteData = res.data;
        console.log(res);
        dispatch({ type: "DELETE_USERS_SUCCESS", payload: deleteData });
      });
  } catch (error) {
    dispatch({ type: "DELETE_USERS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "DELETE_USERS_REQUEST",
  };
};

const exportObject = {
  deleteUser,
  requestPosts,
};
export default exportObject;

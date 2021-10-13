import axios from "axios";

const updateManagerPosts = (user, id) => async (dispatch) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;

  console.log(id, "uaction id");

  const userToken = localStorage.getItem("token");
  console.log("user token", userToken);

  dispatch(requestPosts());
  try {
    await axios
      .put(
        `http://34.210.129.167/api/users/${id}`,
        {
          firstName,
          lastName,
          email,
          password,
          password_confirmation,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const updatemanagerData = res.data;
        console.log(res);
        dispatch({ type: "UPDATE_MANAGER_SUCCESS", payload: updatemanagerData });
      });
  } catch (error) {
    dispatch({ type: "UPDATE_MANAGER_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "UPDATE_MANAGER_REQUEST",
  };
};

const exportObject = {
  updateManagerPosts,
  requestPosts,
};
export default exportObject;

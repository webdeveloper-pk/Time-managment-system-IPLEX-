import axios from "axios";

const updatePosts = (user, id) => async (dispatch) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  const userType = user.userType;

  const userToken = localStorage.getItem("token");
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
          userType,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const updateuserData = res.data;
        dispatch({ type: "UPDATE_USER_SUCCESS", payload: updateuserData });
      });
  } catch (error) {
    dispatch({ type: "UPDATE_USER_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "UPDATE_USER_REQUEST",
  };
};

const exportObject = {
  updatePosts,
  requestPosts,
};
export default exportObject;

import axios from "axios";

const userPost = (user) => async (dispatch) => {

  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  const userType = user.userType;
  
  const userToken = localStorage.getItem("token");
  console.log("user token", userToken)

  dispatch(requestPosts());
  try {
     await axios
      .post(
        "http://34.210.129.167/api/users",
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
        const userData = res.data;
        console.log(res)
        dispatch({ type: "CREATE_USER_SUCCESS", payload: userData });
      });
  } catch (error) {
    dispatch({ type: "CREATE_USER_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "CREATE_USER_REQUEST",
  };
};

const exportObject = {
  userPost,
  requestPosts,
};
export default exportObject;

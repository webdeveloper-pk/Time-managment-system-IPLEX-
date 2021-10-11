import axios from "axios";

const userPost = (user) => async (dispatch) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  const userType = user.userType;
  
  const userToken = localStorage.getItem("token");
  console.log("token", userToken)

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
  userPost,
  requestPosts,
};
export default exportObject;

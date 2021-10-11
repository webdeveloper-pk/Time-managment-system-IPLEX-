import axios from "axios";

const signupManager = (user) => async (dispatch) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  const password_confirmation = user.password_confirmation;

  dispatch(requestPosts());
  try {
    const response = await axios.post("http://34.210.129.167/api/register", {
      firstName, lastName, email, password, password_confirmation
    }).then((res) => {
    const signupData = res.data;
      dispatch({ type: "FETCH_POSTS_SUCCESS", payload: signupData });
      console.log(response);
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

const exportObject =  {
  signupManager,
  requestPosts,
};

export default exportObject;
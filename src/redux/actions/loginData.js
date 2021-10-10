import axios from "axios";

const fetchPost = (user) => async (dispatch) => {
  
  const email = user.email;
  const password = user.password;

  dispatch(requestPosts());
  try {
    const response = await axios.post("http://34.210.129.167/api/login", {
        email,
        password,
      })
      .then((res) => {
        const loginData = res.data;
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: loginData });
        console.log(response);
        // localStorage.setItem(
        //   "login",
        //   JSON.stringify({
        //     userLogin: true,
        //     token: response.data.token,
        //   })
        // );
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
  fetchPost,
  requestPosts,
};
export default exportObject;

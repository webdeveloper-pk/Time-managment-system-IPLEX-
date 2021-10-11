import axios from "axios";

const creatework = (user) => async (dispatch) => {
  const logDate = user.logDate;
  const hours = user.hours;
  const description = user.description;
  console.log( hours ,  "hours in testing")

    const userToken = localStorage.getItem("token");
    console.log("creating log token", userToken);

  dispatch(requestPosts());
  try {
    await axios
      .post(
        "http://34.210.129.167/api/work-logs",
        {
          logDate,
          hours,
          description
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const createData = res.data;
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: createData });
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
  creatework,
  requestPosts,
};

export default exportObject;

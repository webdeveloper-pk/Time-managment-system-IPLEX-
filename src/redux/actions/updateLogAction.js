import axios from "axios";

const updateLogPosts = (user, id) => async (dispatch) => {
  const logDate = user.logDate;
  const hours = user.hours;
  const description = user.description;

  const userToken = localStorage.getItem("token");
  dispatch(requestPosts());
  try {
    await axios
      .put(
        `http://34.210.129.167/api/work-logs/${id}`,
        {
          logDate,
          hours,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const updatelogData = res.data;
        console.log(res);
        dispatch({ type: "UPDATE_LOG_SUCCESS", payload: updatelogData });
      });
  } catch (error) {
    dispatch({ type: "UPDATE_LOG_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "UPDATE_LOG_REQUEST",
  };
};

const exportObject = {
  updateLogPosts,
  requestPosts,
};
export default exportObject;

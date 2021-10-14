import axios from "axios";

const creatework = (user) => async (dispatch) => {
  const logDate = user.logDate;
  const hours = user.hours;
  const description = user.description;

  const userToken = localStorage.getItem("token");
  dispatch(requestPosts());
  try {
    await axios
      .post(
        "http://34.210.129.167/api/work-logs",
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
        const createData = res.data;
        dispatch({ type: "CREATE_LOGS_SUCCESS", payload: createData });
      });
  } catch (error) {
    dispatch({ type: "CREATE_LOGS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "CREATE_LOGS_REQUEST",
  };
};

const exportObject = {
  creatework,
  requestPosts,
};

export default exportObject;

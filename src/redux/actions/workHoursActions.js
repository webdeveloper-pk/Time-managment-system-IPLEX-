import axios from "axios";

const workHours = (user, id) => async (dispatch) => {
  const userToken = localStorage.getItem("token");

  dispatch(requestPosts());
  try {
    await axios
      .patch(
        `http://34.210.129.167/api/users/${parseInt(
          id
        )}/preferred-working-hours`,
        {
          workingHours: user,
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((res) => {
        const hoursData = res.data;
        dispatch({ type: "WORK_HOURS_SUCCESS", payload: hoursData });
      });
  } catch (error) {
    dispatch({ type: "WORK_HOURS_FAILURE", payload: error });
  }
};

const requestPosts = () => {
  return {
    type: "WORK_HOURS_REQUEST",
  };
};

const exportObject = {
  workHours,
  requestPosts,
};

export default exportObject;

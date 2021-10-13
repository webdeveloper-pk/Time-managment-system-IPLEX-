import signup from "./signUpData"
import loginData from "./loginData";
import userDataPosts from "./userAction"
import getUserData from "./getUserAction"
import createUserData from "./createUserAction";
import getlogsusers from "./getUserLogAction";
import deleteusers from "./deleteUserAction";
import updateUserPost from "./updateuserAction";
import updateManagersPost from "./updateManagerAction"
import updateLogsPosts from "./updateLogAction"

const allActions = {
  signup,
  loginData,
  userDataPosts,
  getUserData, //get data
  createUserData,
  getlogsusers,
  deleteusers,
  updateUserPost,
  updateManagersPost,
  updateLogsPosts,
};

export default allActions;

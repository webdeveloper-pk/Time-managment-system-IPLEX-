import { combineReducers } from "redux";
import posts from "./FormData";
import loginposts from "./loginDataReducer";
import userposts from "./userReducer";
import getuserposts from "./getUserReducer";
import createuserss from "./createUserReducer";
import getuserlogss from "./getLogsReducer";
import deleteuserposts from "./deleteUserReducer";
import updateuserposts from "./updateUserReducer";
import getsingleuser from "./getSingleUserReducer";
import updatemanagerposts from "./updateMnagerReducer";
import updatelogsposts from "./updateLogReducer";
import getuserfilterlogss from "./getFilterReducer";

const rootReducer = combineReducers({
  posts,
  loginposts,
  userposts,
  getuserposts,
  createuserss,
  getuserlogss,
  deleteuserposts,
  updateuserposts,
  getsingleuser,
  updatemanagerposts,
  updatelogsposts,
  getuserfilterlogss,
});

export default rootReducer;

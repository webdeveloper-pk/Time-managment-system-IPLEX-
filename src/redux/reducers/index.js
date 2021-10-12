import { combineReducers } from "redux";
import posts from "./FormData";
import loginposts from "./loginDataReducer";
import userposts from "./userReducer";
import getuserposts from "./getUserReducer";
import createuserss from "./createUserReducer";
import getuserlogss from "./getLogsReducer";
import deleteuserposts from "./deleteUserReducer";

const rootReducer = combineReducers({
  posts,
  loginposts,
  userposts,
  getuserposts,
  createuserss,
  getuserlogss,
  deleteuserposts,
});

export default rootReducer;

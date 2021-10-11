import posts from "./FormData";
import loginposts from "./loginDataReducer"
import userposts from "./userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts,
  loginposts,
  userposts
});

export default rootReducer;

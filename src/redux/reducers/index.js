import posts from "./FormData";
import loginposts from "./loginDataReducer"
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  posts,
  loginposts,
});

export default rootReducer;

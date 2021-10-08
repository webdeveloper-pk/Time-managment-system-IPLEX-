import { combineReducers } from "redux";
import todoReducers from "./FormData";

const rootreducer = combineReducers({
  todoReducers,
});

export default rootreducer;
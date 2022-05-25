import { combineReducers } from "redux";
import listReducer from "./listReducer";
import myListReducer from "./myListReducer";

const rootReducer = combineReducers({
  listReducer,
  myListReducer
})

export default rootReducer
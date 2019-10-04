import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";

// combining all reducers
export default combineReducers({
  user: userReducer
});

import { combineReducers } from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";

// combining all reducers
export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
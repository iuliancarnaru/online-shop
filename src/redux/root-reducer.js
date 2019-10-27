import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage
// import sessionStorage from "redux-persist/lib/storage/session" // sessionStorage

import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer";
import directoryReducer from "./directory/directory-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer
});

// combining all reducers
export default persistReducer(persistConfig, rootReducer);

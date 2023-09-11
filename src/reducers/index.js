import { cakeReducer } from "./cakeReducer.js";
import { iceCreamReducer } from "./iceCreamReducers.js";
import { combineReducers } from "redux";
import { userReducer } from "./userReducer.js";
export const rootReducers = combineReducers({
  iceCream: iceCreamReducer,
  cake: cakeReducer,
  user: userReducer,
});

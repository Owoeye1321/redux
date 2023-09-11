import { cakeReducer } from "./cakeReducer.js";
import { iceCreamReducer } from "./iceCreamReducers.js";
import { combineReducers } from "redux";
export const rootReducers = combineReducers({
  iceCreamReducer,
  cakeReducer,
});

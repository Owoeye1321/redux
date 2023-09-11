import { cakeReducer } from "./cakeReducer";
import { iceCreamReducer } from "./iceCreamReducers";
import { combineReducers } from "redux";
export default combineReducers({
  iceCreamReducer,
  cakeReducer,
});

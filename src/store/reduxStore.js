import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { rootReducers } from "../reducers/index.js";
import { buyCake, buyIceCream, eatCake } from "../actions/cakeAction.js";
import thunk from "redux-thunk";
import { fetchUsers } from "../http/authRequest.js";
import logger from "redux-logger";

// Define Middleware
const middleware = thunk.default;

const store = createStore(
  rootReducers,
  compose(applyMiddleware(middleware, logger.default))
);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
const callAction = async () => {
  store.dispatch(await buyCake());
  store.dispatch(await eatCake());
  store.dispatch(await buyIceCream());
  store.dispatch(await fetchUsers());
  unsubscribe();
};
callAction();

import { createStore, applyMiddleware, compose } from "redux";
import { rootReducers } from "../reducers/index.js";
import { buyCake, buyIceCream, eatCake } from "../actions/cakeAction.js";
import logger from "redux-logger";
const store = createStore(
  rootReducers,
  compose(applyMiddleware(logger.default))
);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
const callAction = async () => {
  store.dispatch(await buyCake());
  store.dispatch(await eatCake());
  store.dispatch(await buyIceCream());
  unsubscribe();
};
callAction();

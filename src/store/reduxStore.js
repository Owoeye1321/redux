import { createStore, applyMiddleware, compose } from "redux";
import { cakeReducer } from "../reducers/cakeReducer.js";
import { buyCake, eatCake } from "../actions/cakeAction.js";
import logger from "redux-logger";
const store = createStore(
  cakeReducer,
  compose(applyMiddleware(logger.default))
);
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
const callAction = async () => {
  store.dispatch(await buyCake());
  store.dispatch(await eatCake());
  store.dispatch(await buyCake());
  store.dispatch(await eatCake());

  unsubscribe();
};
callAction();

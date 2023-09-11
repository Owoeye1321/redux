import { BUY_CAKE, EAT_CAKE } from "../resources/types.js";
const initialState = {
  numberOfCakesSold: 12,
  numberOfCakesEaten: 3,
};
export const cakeReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...previousState,
        numberOfCakesSold: previousState.numberOfCakesSold - 1,
      };
    }
    case EAT_CAKE: {
      return {
        ...previousState,
        numberOfCakesEaten: previousState.numberOfCakesEaten - 1,
      };
    }
    default:
      return previousState;
  }
};

import { BUY_CAKE, EAT_CAKE, BUY_ICECREAM } from "../resources/types.js";
const initialCakeState = {
  numberOfCakesSold: 12,
  numberOfCakesEaten: 3,
};
export const cakeReducer = (previousState = initialCakeState, action) => {
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

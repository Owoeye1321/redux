import { BUY_CAKE, EAT_CAKE, BUY_ICECREAM } from "../resources/types.js";
const initialIceCreamState = {
  numberOfIceCreams: 45,
};
export const iceCreamReducer = (
  previousState = initialIceCreamState,
  action
) => {
  switch (action.type) {
    case BUY_ICECREAM: {
      return {
        ...previousState,
        numberOfIceCreams: previousState.numberOfIceCreams - 1,
      };
    }
    default:
      return previousState;
  }
};

import { BUY_CAKE, BUY_ICECREAM, EAT_CAKE } from "../resources/types.js";

export const buyCake = async () => {
  return { type: BUY_CAKE, info: "Cakes sold successfully" };
};
export const eatCake = async () => {
  return { type: EAT_CAKE, info: "Cakes eaten successfully" };
};
export const buyIceCream = async () => {
  return { type: BUY_ICECREAM, info: "Cakes eaten successfully" };
};

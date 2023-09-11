import { BUY_CAKE, EAT_CAKE } from "../resources/types.js";

export const buyCake = async () => {
  return { type: BUY_CAKE, info: "Cakes sold successfully" };
};
export const eatCake = async () => {
  return { type: EAT_CAKE, info: "Cakes eaten successfully" };
};

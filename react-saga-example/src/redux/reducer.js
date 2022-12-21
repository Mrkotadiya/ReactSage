// import { ADDD_TO_CART } from "./constant";
export const cartData = (data = [], action) => {
  console.log("reducer called",action);
//   return "abc"
// if (action.type === ADDD_TO_CART) {
//     console.warn("reducer called", action);
//     return action.data;
//   } else {
//     return "no action matched";
//   }

  switch(action.type){
      case "ADD_TO_CARD":
          return [
              action.data,
              ...data
          ];
            default: return data;
  }
};

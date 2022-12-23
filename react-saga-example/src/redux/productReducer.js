export const productData = (data = [], action) => {
  switch (action.type) {
    case "PRODUCT_LIST":
      console.log("product List called", action);
      return [action.data];

    case "SET_PRODUCT_LIST":
        console.log("set Action data", action);
      return [...action.data];
    //     case "EMPTY_CART":
    //       data=[];
    //           return [
    //                ...data
    //           ];
    default:
      return data;
  }
};

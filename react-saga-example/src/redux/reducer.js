
export const cartData = (data = [], action) => {
  console.log("reducer called",action);


  switch(action.type){
      case "ADD_TO_CART":
          return [
              action.data,
              ...data
          ];
      case "REMOVE_TO_CART":

        data.length? data.length = data.length-1:data=[];
            return [
                ...data
            ];
      case "EMPTY_CART":
        data=[];
            return [
                ...data
            ];
            default: return data;
  }
};


export const cartData = (data = [], action) => {
    
    switch(action.type){
        case "ADD_TO_CART":
          console.log("ADD_TO_CART condition called",action);
          return [
              action.data,
              ...data
          ];

      case "REMOVE_TO_CART":
        console.log("REMOVE_TO_CART condition called",action);
        // data.length? data.length = data.length-1:data=[];
        const remainingItems= data.filter((item)=>item.id!==action.data);
        console.warn("remaining items here ", remainingItems);
            return [
                ...remainingItems
            ];
      case "EMPTY_CART":
        console.log("EMPTY_CART condition called",action);
        data=[];
            return [
                ...data
            ];
            default: return data;
  }
};

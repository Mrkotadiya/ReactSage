
export const productData = (data = [], action) => {
    
    switch(action.type){
        case "PRODUCT_LIST":
            console.log("product List called",action); 
            return [action.data]
    //     case "REMOVE_TO_CART":
  
    //       data.length? data.length = data.length-1:data=[];
    //           return [
    //               ...data
    //           ];
    //     case "EMPTY_CART":
    //       data=[];
    //           return [
    //               ...data
    //           ];
              default: return data;
    }
  };
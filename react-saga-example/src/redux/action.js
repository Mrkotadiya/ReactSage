export const addAction=(data)=>{
    console.log("action called",data);
    return {
        type:"ADD_TO_CART",
        data  
    };
} 

export const removeFromCart=(data)=>{
    console.log("action called",data);
    return {
        type:"REMOVE_TO_CART",
        data  
    };
} 
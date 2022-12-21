export const addAction=(data)=>{
    console.log("action called",data);
    return {
        type:"ADD_TO_CARD",
        data
    };
} 
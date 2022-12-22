export const productList=async()=>{
    let data= await fetch("https://gorest.co.in/public/v2/users");
    data = data.json();
    console.log("product List called",data);

    return {
        type:"PRODUCT_LIST",
        data
    };
} 
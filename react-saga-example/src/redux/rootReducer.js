import { cartData } from "./reducer";

import { combineReducers } from "redux";
import { productData } from "./productReducer";


const rootReducer = combineReducers({ 
    cartData ,
    productData
});
 
export default rootReducer;

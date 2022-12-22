import { addAction, emptyCart, removeFromCart } from '../redux/action'; 
import { useDispatch } from 'react-redux';
import { productList } from '../redux/productAction';
import {useSelector} from "react-redux";


function Main() {
  const dispatch= useDispatch();
  let data= useSelector((state)=>state.productData);
  console.log("main reducer called",data);
  const product={
    name:"iphone ",
    color:"white", 
    price:230300
  }
  return (
    <div>
        <button onClick={()=>dispatch(addAction(product))}>Add to card</button> 
    <div>
        <button onClick={()=>dispatch(removeFromCart(product.name))}>Remove From card</button> 
    </div>
    <div>
        <button onClick={()=>dispatch(emptyCart())}>Empty card</button> 
    </div>
    <div>
        <button onClick={()=>dispatch(productList(product))}>product List</button> 
    </div>
    </div>
  );
}

export default Main;
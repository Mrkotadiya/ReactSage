import { addAction, removeFromCart } from '../redux/action'; 
import { useDispatch } from 'react-redux';


function Main() {
  const dispatch= useDispatch();
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
    </div>
  );
}

export default Main;
import { addAction } from '../redux/action'; 
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
    </div>
  );
}

export default Main;
import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import "./Header.css";
import {useEffect} from "react";

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.log("data in main componetns using saga", data);
  // const product = {
  //   id: 1,
  //   name: "iphone ",
  //   email: "nirbhay@gmial.com",
  //   gender: "male",
  //   status: "active",
  // };

  useEffect(()=>{
      dispatch(productList())
  },[])
  return (
    <div>
      {/* <button onClick={() => dispatch(addToCart(product))}>Add to card</button>
      <div>
        <button onClick={() => dispatch(removeFromCart(product.name))}>
          Remove From card
        </button>
      </div> */}
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty card</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList(product))}>
          product List
        </button>
      </div> */}
      <div className="product-container">
        {data.map((i) => {
          return (
            <div  key={i.id} className="product-item">
              <ul>
                <li>{i.id}</li>
                <li>{i.name}</li>
                <li>{i.email}</li>
                <li>{i.gender}</li>
                <li>{i.status}</li>
                <div>
                  <button onClick={()=>{dispatch(addToCart(i))}}>Add to card</button>
                  <button onClick={()=>{dispatch(removeFromCart(i.id))}}>Remove From Cart</button>
                </div>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;

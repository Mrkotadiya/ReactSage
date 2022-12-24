import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

function Cart() {
  const cartData = useSelector((state) => state.cartData);
//   let amount = cartData.length &&  cartData.map(i=>i.id).reducer((prev,next)=>prev + next)
//   console.log(amount);
  return (
    <div>
      <Link to="/">
        <h3> ProductList </h3>
      </Link>
      <h3>Cart Comoponets</h3>
      <div className="cart-page-container">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.gender}</td>
                  <td>{item.status}</td>
                  {/* <th>Action</th> */}
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="price-detail"> 
            <div className="oneCart"> <span>Name</span><span>nirbhay</span></div>
            <div className="oneCart"> <span>Email</span><span>nirbhay@gmail.com</span></div>
            <div className="oneCart"> <span>Gender</span><span>Male</span></div>
            <div className="oneCart"> <span>Status</span><span>Active</span></div>

        </div> */}
      </div>
    </div>
  );
}

export default Cart;

import React from "react";
import "./Header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const result = useSelector((state) => state.cartData);
  console.log("redux data in header ", result);
  return (
    <div className="header">
     <Link to='/'>
     <h3 className='logo' > E-Commerce </h3>
     </Link> 

      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
            alt=""
          />
        </div>
      </Link>
    </div>
  );
}

export default Header;

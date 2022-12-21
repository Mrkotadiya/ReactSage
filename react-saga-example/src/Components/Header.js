import React from 'react';
import './Header.css';
import {useSelector} from "react-redux";

function Header() {
    const result= useSelector((state)=>state.cartData);
    console.log("redux data in header ",result);
  return (
    <div className='header'>
         <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt=""/>
            </div>
    </div>
  )
}

export default Header;
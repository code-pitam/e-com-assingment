import React from 'react'
import './nav.css'
import { FaCartArrowDown } from "react-icons/fa";
import {useSelector} from "react-redux"


function Nav() {
  const cartData= useSelector((state) => state.carts)
  return (
    <header>
      <div className="logo">Build With Innovation</div>
      <div className="right-corner">
        <FaCartArrowDown value={{ color: "blue", size: "50px" }} />
        <p className="count">{cartData?.totalItem ? cartData.totalItem : 0}</p>
        <p>{cartData?.totalPrice ? cartData.totalPrice : 0}</p>
      </div>
    </header>
  );
}

export default Nav
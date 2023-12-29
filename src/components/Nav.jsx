import React from 'react'
import './nav.css'
import { FaCartArrowDown } from "react-icons/fa";


function Nav() {
  return (
    <header>
      <div className="logo">Build With Innovation</div>
      <div className="right-corner">
        <FaCartArrowDown value={{ color: "blue", size: "50px" }} />
        <p className='count'>0</p>
        <p>₹254</p>
      </div>
    </header>
  );
}

export default Nav
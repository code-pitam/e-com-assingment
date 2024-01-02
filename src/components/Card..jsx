import React, { useState } from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { addCart } from "../store/productSlice";

function Card({ data }) {
const dispatch = useDispatch()
const [loding, setLoding] = useState(false)




  const addtoCart = (e, data) => {
    e.preventDefault();
    console.log("add to cart");
    dispatch(addCart({id: data?.id, price:data?.price}))
    setLoding(true)
    setTimeout(() => {
      setLoding(false)
    },1000);

  };

  return (
    <div className="card">
      <img src={data?.thumbnail} alt="" />
      <p className="p-name">{data?.title}</p>
      <div className="details">
        <p>
          {data?.price} ₹ <br />
          <span>{data?.discountPercentage}% Discount</span>
        </p>
        <p>Rating:{data?.rating}</p>
      </div>
      <button className={loding ? `c-active`: "n-active"}
      disabled={loding}
        onClick={(e) => {
          addtoCart(e, data);
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default Card;

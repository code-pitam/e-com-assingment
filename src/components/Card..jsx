import React from "react";
import "./Card.css";

function Card({data}) {
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
      <button>Buy Now</button>
    </div>
  );
}

export default Card;

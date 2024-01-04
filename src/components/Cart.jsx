import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.css";

function Cart() {
  const [Data, setData] = useState();
  const [cartData, setCartData] = useState();
  const [ArrCartData, setArrCartData] = useState();
  const [FilterData, setFilterData] = useState();

  const data = useSelector((state) => state.products?.products);
  const cData = useSelector((state) => state?.carts);
  console.log(cData);

  console.log(data);
  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCartData(cData);
    const filteredProducts = Data?.filter((product) =>
      cartData?.cartIds?.includes(product.id)
    );
    console.log(cData);
// const newArr = filteredProducts?.map((obj, i)=>{
//   cData?.cartItem?.map((o, i)=>{
//     if (obj?.id == o._id) {
//       obj.cartData = o;
//     }
//   })
// console.log(newArr);
// })



    // filteredProducts?.push((item2) => 
    // cData.filter((item) => item.id.includes(item2.id))
    // );
    setFilterData(filteredProducts);

    // if (cartData) {
    //   const arr = Object.keys(cData?.cartItem).map((key) => parseInt(key));
    //   // console.log(arr);

    //   setArrCartData(arr);
    // }
  }, [cData, cartData]);
console.log(FilterData);
  // console.log(ArrCartData);
  useEffect(() => {
    // const filteredProducts = Data?.filter((product) =>
    //   ArrCartData?.includes(product.id)
    // );
    // // console.log(filteredProducts);
    // setFilterData(filteredProducts);
  }, [ArrCartData]);

  // console.log(FilterData);

  return (
    <div className="cart">
      <div className="main">
        <div className="cart-item">
          <div className="pic-ture">
            Product Picture
            {/* <img src={item.thumbnail} alt="" srcset="" /> */}
          </div>
          <div className="name">{name}</div>
          <div className="qty">qty</div>
          <div className="price">Price</div>
          <div className="total-price">Total Price</div>
        </div>
        {FilterData?.map((item) => {
          return (
            <div className="cart-item-c">
              <div className="pic">
                <img src={item?.thumbnail} alt="" srcset="" />
              </div>
              <div className="name">{item.title}</div>
              <div className="qty">item</div>
              <div className="price">{item.price}</div>
              <div className="total-price">Total Price</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;

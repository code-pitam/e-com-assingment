import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function Cart() {
  const [Data, setData] = useState();
  const [cartData, setCartData] = useState();
  const [ArrCartData, setArrCartData] = useState();
  const [FilterData, setFilterData] = useState();

  const data = useSelector((state) => state.products?.products);
  const cData = useSelector((state) => state?.carts);

  // console.log(data);
  useEffect(() => {
    setData(data);
  }, [data]);

  useEffect(() => {
    setCartData(cData);
    if (cartData) {
      const arr = Object.keys(cData?.cartItem).map((key) => parseInt(key));
      // console.log(arr);

      setArrCartData(arr);
    }
  }, [cData]);

  // console.log(ArrCartData);
  useEffect(() => {
    const filteredProducts = Data?.filter((product) =>
      ArrCartData?.includes(product.id)
    );
    // console.log(filteredProducts);
    setFilterData(filteredProducts);
  }, [ArrCartData]);

  console.log(FilterData);

  return <div>card</div>;
}

export default Cart;

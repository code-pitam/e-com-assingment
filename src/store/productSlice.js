import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = {};

const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      console.log(action);
      console.log(state);
      if (!state.cartItem) {
        state.cartItem = {};
      }

      if (state.cartItem[action.payload.id]) {
        state.cartItem[Number(action.payload.id)] += 1;
      } else {
        state.cartItem[Number(action.payload.id)] = 1;
      }

      if (!state.totalItem) {
        state.totalItem = 0;
      }
      if (!state.totalPrice) {
        state.totalPrice = 0;
      }
      state.totalItem += 1;
      state.totalPrice += action.payload.price;
    },
    addCartProduct: (state, action) => {
      // console.log(Data);
      console.log(state.cartItem);
      if (state.cartItem) {
        const arr = Object.keys(state?.cartItem).map((key) => parseInt(key));
        console.log(arr);
        state.cartIds = arr;

        //  const filteredProducts = Data?.filter((product) =>
        //    arr?.includes(product.id)
        //  );
        // console.log(filteredProducts);
        //state.filterProduct = filteredProducts;
      }
    },
  },
});

export const { addCart, addCartProduct } = productCartSlice.actions;
export default productCartSlice.reducer;

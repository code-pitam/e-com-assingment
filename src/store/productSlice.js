import { createSlice } from "@reduxjs/toolkit";

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
      if(!state.totalPrice){
        state.totalPrice = 0;
      }
      state.totalItem += 1;
      state.totalPrice += action.payload.price;
    },
  },
});

export const { addCart } = productCartSlice.actions;
export default productCartSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const res = await fetch(`https://dummyjson.com/products`);
  return res?.json();
});

const initialState = {};

const allProductSlice = createSlice({
  name: "allProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.products = action.payload.products;
    });
  },
});

export default allProductSlice.reducer;

import {configureStore} from '@reduxjs/toolkit';
import productCartSlice from './productSlice';
import allProcuctSlice from './allProcuctSlice';
const store = configureStore({
  reducer: {
    carts : productCartSlice,
    products: allProcuctSlice,
  },
});
export default store;
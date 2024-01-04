import {configureStore} from '@reduxjs/toolkit';
import productCartSlice from './productSlice';
import allProcuctSlice from './allProcuctSlice';
import authSlice from './authSlice';
const store = configureStore({
  reducer: {
    carts : productCartSlice,
    products: allProcuctSlice,
    auth: authSlice,
  },
});
export default store;
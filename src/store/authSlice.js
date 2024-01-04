import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    login: (state, action) => {
        state.data = action.payload;
console.log(action.payload);
    },
    logout: (state, action) => {
     state = {}
     
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

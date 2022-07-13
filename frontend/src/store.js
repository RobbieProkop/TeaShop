import { configureStore } from "@reduxjs/toolkit";
import productListSlice from "./reducers/productReducers";

const preloadedState = {};

const store = configureStore({
  reducer: { productListSlice },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";

const preloadedState = {};

const store = configureStore({
  reducer: {
    product: productReducer,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

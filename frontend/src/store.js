import { configureStore } from "@reduxjs/toolkit";
import productList from "./reducers/productReducers";

const preloadedState = {};

const store = configureStore({
  reducer: { productList },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

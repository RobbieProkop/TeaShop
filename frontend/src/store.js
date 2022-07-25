import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";

const preloadedState = {};

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

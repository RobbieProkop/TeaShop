import { configureStore, createReducer } from "@reduxjs/toolkit";
import productReducer from "./features/products/productsSlice";
import cartReducer from "./features/cart/cartSlice";
import authReducer from "./features/Auth/authSlice";

const initialState = {};

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
  },
  initialState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

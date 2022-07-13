import { configureStore } from "@reduxjs/toolkit";

const preloadedState = {};

const store = configureStore({
  reducer: {},
  preloadedState,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

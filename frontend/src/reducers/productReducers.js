import { createSlice } from "@reduxjs/toolkit";

const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    productListRequest(state) {
      state.push({
        loading: false,
        products: [],
      });
    },
    productListSuccess(state, action) {
      state.push({
        loading: false,
        products: action.payload,
      });
    },
    productListFail(state, action) {
      state.push({
        loading: false,
        error: action.payload,
      });
    },
  },
});

export const { productListRequest, productListSuccess, productListFail } =
  productListSlice.actions;
export default productListSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const productList = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    productListRequest(state, action) {
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
  productList.actions;
export default productList.reducer;

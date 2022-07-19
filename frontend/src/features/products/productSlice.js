import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/products");
      return res.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default productSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import productService from "./productService";

// const initialState = {
//   products: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// const productList = createSlice({
//   name: "products",
//   initialState,
//   reducers: {
//     productListRequest: (state) => {
//       state.push({
//         loading: true,
//         products: [],
//       });
//     },
//     productListSuccess: (state, action) => {
//       state.push({
//         loading: false,
//         products: action.payload,
//       });
//     },
//     productListFail: (state, action) => {
//       state.push({
//         loading: false,
//         error: action.payload,
//       });
//     },
//   },
// });

// export default productList.reducer;

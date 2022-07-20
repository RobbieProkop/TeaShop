import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addCartItems = createAsyncThunk(
  "cart.addCartItems",
  async (productId, thunkAPI) => {
    try {
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (!existItem) {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
      return {
        ...state,
        cartItems: state.cartItems.map((x) =>
          x.product === existItem.product ? item : x
        ),
      };
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

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addCartItems.pending, (state) => {
        state.isLoading = true;
        state = { ...state };
      })
      .addCase(addCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cartItems = action.payload;
      })
      .addCase(addCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export default cartSlice.reducer;

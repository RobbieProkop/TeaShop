// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//   cartItems: [],
//   isError: false,
//   isSuccess: false,
//   isLoading: false,
//   message: "",
// };

// export const addCartItems = createAsyncThunk(
//   "cart/addCartItems",
//   async (productId, thunkAPI) => {
//     try {
//       const existItem = state.cartItems.find((x) => x.product === item.product);

//       if (!existItem) {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item],
//         };
//       }
//       return {
//         ...state,
//         cartItems: state.cartItems.map((x) =>
//           x.product === existItem.product ? item : x
//         ),
//       };
//     } catch (error) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     cartReducer: ((state = { cartItems: [] }), (action) => {}),
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(addCartItems.pending, (state) => {
//         state.isLoading = true;
//         state = { ...state };
//       })
//       .addCase(addCartItems.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isSuccess = true;
//         state.cartItems = action.payload;
//       })
//       .addCase(addCartItems.rejected, (state, action) => {
//         state.isLoading = false;
//         state.isError = true;
//         state.message = action.payload;
//       });
//   },
// });

// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQty: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.qty++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          id: newItem.id,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
          name: newItem.name,
          image: newItem.image,
        });
      }
      state.totalQty++;
    },
    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);
      if (existingItem.qty === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
      } else {
        existingItem.qty--;
        existingItem.totalPrice -= existingItem.price;
      }
      state.totalQty--;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

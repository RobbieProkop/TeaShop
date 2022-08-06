import axios from "axios";
import { cartActions } from "../features/cart/cartSlice";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  const itemsList = {
    id: data._id,
    name: data.name,
    price: data.price,
    image: data.image,
    countInStock: data.countInStock,
    qty,
  };

  dispatch(addToCart(itemsList));

  localStorage.setItem("itemsList", JSON.stringify(getState().cart.itemsList));
};

import axios from "axios";
import {
  productListRequest,
  productListSuccess,
  productListFail,
} from "../reducers/productReducers.js";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productListRequest });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: productListSuccess,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: productListFail,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

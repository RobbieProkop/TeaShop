import axios from "axios";

const API_URL = "/api/cart/";

const addCartItems = async (productId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await axios.post(API_URL, productId, config);

  return res.data;
};

// Delete user goal
// const deleteGoal = async (itemId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
//   const res = await axios.delete(API_URL + cartId, config);

//   return res.data;
// };

const cartService = {
  addCartItems,
  deleteItems,
};

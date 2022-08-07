import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getProducts } from "../features/products/productsSlice";
import { addToCart } from "../actions/cartActions";
import { useParams } from "react-router-dom";

const CartScreen = () => {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const location = useLocation();
  const navigate = useNavigate();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
  return <div>Cart</div>;
};
export default CartScreen;

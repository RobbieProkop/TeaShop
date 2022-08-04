import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getProducts } from "../features/products/productsSlice";
import { cartActions } from "../features/cart/cartSlice";

const CartScreen = () => {
  const dispatch = useDispatch();

  const { isLoading, message, isError } = useSelector((state) => state.product);

  const showCart = useSelector((state) => state.cart.showCart);

  const setShowCart = () => {
    dispatch(cartActions.setShowCart());
  };
  const { itemsList } = useSelector((state) => state.cart);

  let totalCost = 0;
  itemsList.forEach((item) => {
    totalCost += item.totalPrice;
  });

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between my-3">
        <h2>Your Cart</h2>
        <Link
          onClick={showCart ? setShowCart : null}
          className="btn btn-light "
          to="/"
        >
          Go Back
        </Link>
      </div>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">{message}</Message>
      ) : (
        <Row>
          {itemsList.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <Product product={item} quantity={item.qty} />
            </Col>
          ))}
        </Row>
      )}
      <h3 className="d-flex justify-content-end">
        Total: ${Math.round(totalCost * 100) / 100}
      </h3>
    </div>
  );
};
export default CartScreen;

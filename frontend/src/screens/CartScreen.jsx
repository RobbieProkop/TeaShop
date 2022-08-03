import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { getProducts } from "../features/products/productsSlice";

const CartScreen = () => {
  const dispatch = useDispatch();
  const { itemsList } = useSelector((state) => state.cart);

  const { isLoading, message, isError } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">{message}</Message>
      ) : (
        <Row>
          {itemsList.map((item) => (
            <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
              <Product key={item.id} product={item} quantity={item.qty} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};
export default CartScreen;

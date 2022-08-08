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
  ListGroupItem,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Message from "../components/Message";
import { getProducts } from "../features/products/productsSlice";
import { cartActions } from "../features/cart/cartSlice";
import {
  getItemsListFromStorage,
  saveItemsList,
} from "../features/localStorage/localStorage";

const CartScreen = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, message, isError } = useSelector((state) => state.product);
  const itemsList = useSelector((state) => state.cart.itemsList);
  const showCart = useSelector((state) => state.cart.showCart);

  const setShowCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const incrementItem = (item) => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        qty: 1,
      })
    );
    saveItemsList(item);
  };
  const decrementItem = (item) => {
    dispatch(cartActions.removeFromCart(item.id));
    saveItemsList(item.id);
  };

  useEffect(() => {
    dispatch(getProducts());
    // saveItemsList(item);
    getItemsListFromStorage();
  }, []);

  const removeFromCartHandler = (item) => {
    dispatch(cartActions.removeAll(item.id));
  };

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {itemsList.length === 0 ? (
          <Message>
            Your cart is empty{" "}
            <Link
              to="/"
              className="btn"
              onClick={showCart ? setShowCart : null}
            >
              Go Back
            </Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {itemsList.map((item) => (
              <ListGroupItem key={item.id}>
                <Row>
                  <Col md={2}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fluid
                      rounded
                    ></Image>
                  </Col>
                  <Col md={3}>
                    <Link to={`/product.${item.id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={1}>x{item.qty}</Col>
                  <Col md={1}>
                    <Button onClick={() => incrementItem(item)}>+</Button>
                  </Col>
                  <Col md={1}>
                    <Button onClick={() => decrementItem(item)}>-</Button>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>
                Subtotal ({itemsList.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              $
              {itemsList
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={itemsList.length === 0}
                onClick={checkoutHandler}
              >
                Submit Order
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
    // <div className="container">
    //   <div className="d-flex justify-content-between my-3">
    //     <h2>Your Cart</h2>
    //     <Link
    //       onClick={showCart ? setShowCart : null}
    //       className="btn btn-light "
    //       to="/"
    //     >
    //       Go Back
    //     </Link>
    //   </div>
    //   {isLoading ? (
    //     <Loader />
    //   ) : isError ? (
    //     <Message variant="danger">{message}</Message>
    //   ) : (
    //     <Row>
    //       {itemsList.map((item) => (
    //         <Col key={item.id} sm={12} md={6} lg={4} xl={3}>
    //           <Product product={item} quantity={item.qty} />
    //         </Col>
    //       ))}
    //     </Row>
    //   )}
    //   <h3 className="d-flex justify-content-end">
    //     Total: ${Math.round(totalCost * 100) / 100}
    //   </h3>
    // </div>
  );
};
export default CartScreen;

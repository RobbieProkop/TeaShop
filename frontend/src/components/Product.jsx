import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.showCart);
  const incrementItem = () => {
    dispatch(
      cartActions.addToCart({
        id: product.id,
        price: product.price,
        totalPrice: product.totalPrice,
      })
    );
  };
  const decrementItem = () => {
    dispatch(cartActions.removeFromCart(product.id));
  };

  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>

      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {!showCart && (
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
        )}
        {!showCart && <Card.Text as="h3">${product.price}</Card.Text>}
        {showCart && <Card.Text as="p">Quantity: {product.qty}</Card.Text>}
        {showCart && (
          <Card.Text as="h3">
            ${Math.round(product.totalPrice * 100) / 100}
          </Card.Text>
        )}
        {showCart && (
          <div className="d-flex justify-content-between">
            <Button onClick={incrementItem}>+</Button>{" "}
            <Button onClick={decrementItem}>-</Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default Product;

import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
const Header = () => {
  const qty = useSelector((state) => state.cart.totalQty);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  const notShowCart = () => {
    dispatch(cartActions.setShowCart(false));
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" onClick={notShowCart}>
            <Navbar.Brand>TeaShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                {!qty ? (
                  <Nav.Link>
                    <i className="fas fa-shopping-cart"></i> Cart
                  </Nav.Link>
                ) : (
                  <Nav.Link onClick={showCart}>
                    <i className="fas fa-shopping-cart"></i> Cart({qty})
                  </Nav.Link>
                )}
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;

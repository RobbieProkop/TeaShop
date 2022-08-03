import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../features/cart/cartSlice";
import { authActions } from "../features/Auth/authSlice";
const Header = () => {
  const qty = useSelector((state) => state.cart.totalQty);
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();
  const setShowCart = () => {
    dispatch(cartActions.setShowCart());
  };

  const loginHandler = () => {
    dispatch(authActions.login());
  };

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/" onClick={showCart ? setShowCart : null}>
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
                  <Nav.Link onClick={!showCart ? setShowCart : null}>
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

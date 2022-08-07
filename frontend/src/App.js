import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import { useEffect } from "react";
import axios from "axios";

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);

  // const cartItems = useSelector((state) => cart.itemsList);
  // console.log(cartItems);

  // useEffect(() => {
  //   fetch("https://localhost:5000/api/cart.json", {
  //     method: "PUT",
  //     body: JSON.stringify(cart),
  //   });
  // });
  useEffect(() => {
    const axiosData = async (productId) => {
      const { data } = await axios.get("/api/cart");
      console.log(data);
    };
    axiosData().catch(console.error);
  }, [cart]);

  return (
    <Router>
      <Header />
      {!isLoggedIn && <Auth />}
      <main className="py-3">
        <Container>
          {isLoggedIn && (
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/cart">
                <Route path=":id" element={<CartScreen />} />
                <Route path="" element={<CartScreen />} />
              </Route>
              ;
            </Routes>
          )}
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;

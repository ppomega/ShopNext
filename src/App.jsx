import { use, useEffect, useState } from "react";
import Navbar from "./components/front/Navbar";
import { useLocation } from "react-router-dom";
import Slider from "./components/front/slider";
import Main from "./components/products/main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ProductCard from "./components/products/productCard";
import Checkout from "./components/payment/checkout";
import Auth from "./components/login/main";
import PayGate from "./components/payment/PayGate";
import Footer from "./components/front/footer";
import Filter from "./components/products/filter";
import RouteChangeListener from "./routerChange";
import AboutUs from "./components/about_us/aboutus";
function App() {
  const [cart, setCart] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setL] = useState(window.location.pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [filter, setFilter] = useState({});

  function Carthandler(product, quantity) {
    const existingProduct = cart.find(
      (item) => item.imgPath === product.imgPath
    );
    if (existingProduct) {
      existingProduct.quantity += quantity;
      setCart([...cart]);
      return;
    }
    product.quantity = quantity;
    cart.push(product);
    setCart(cart);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className="h-[1000px] font-inter  relative top-0 bg-[url('bg.jpg')]  dark:bg-none dark:bg-black ">
      <BrowserRouter>
        <RouteChangeListener setL={setL} />
        <Navbar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          cart={cart}
          isLoggedIn={isLoggedIn}
          user={user}
        />
        {location == "/products" && (
          <div className="w-1/3 h-1/2 absolute top-0">
            <Filter darkMode={darkMode} setFilter={setFilter} />
          </div>
        )}
        <Routes>
          <Route path="/" element={<Slider />} />
          <Route
            path="/login"
            element={
              <Auth
                user={user}
                setUser={setUser}
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />

          <Route
            path="/products"
            element={
              <Main
                setUser={setUser}
                filter={filter}
                Carthandler={Carthandler}
              />
            }
          />
          <Route path="/about" element={<AboutUs />} />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                Carthandler={Carthandler}
                setCart={setCart}
                isLoggedIn={isLoggedIn}
                user={user}
              />
            }
          />
          <Route
            path="/product"
            element={<ProductCard Carthandler={Carthandler} />}
          />
          <Route path="/pay" element={<Checkout user={user} />} />
          <Route path="/paygate" element={<PayGate />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

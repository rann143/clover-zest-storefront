import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useParams } from "react-router-dom";
import { useState } from "react";

function App() {
  const { name } = useParams();
  const [cartItems, setCartItems] = useState([
    {
      title: "Salad Bowl",
      price: 8.35,
      description: `10" wooden bowl`,
      image: "#",
      category: "kitchen supplies",
      inCart: true,
    },
    {
      title: "Toaster Oven",
      price: 22.5,
      description: `Stainless Steel`,
      image: "#",
      category: "Appliances",
      inCart: true,
    },
    {
      title: "Leather Jacket",
      price: 89.99,
      description: `100% genuine leather`,
      image: "#",
      category: "men's clothing",
      inCart: true,
    },
  ]);

  return (
    <>
      <NavBar numItems={cartItems.length} />
      {name === "home" ? (
        <Home />
      ) : name === "shop" ? (
        <Shop cartItems={cartItems} setCartItems={setCartItems} />
      ) : name === "cart" ? (
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

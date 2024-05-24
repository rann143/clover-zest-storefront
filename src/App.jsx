import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();

  return (
    <>
      <NavBar numItems={3} />
      {name === "home" ? (
        <Home />
      ) : name === "shop" ? (
        <Shop />
      ) : name === "cart" ? (
        <Cart />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

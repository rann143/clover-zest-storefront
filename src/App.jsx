import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import ProductPage from "./components/ProductPage";

function App() {
  const { name } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }
        return response.json();
      })
      .then((json) => {
        let data = json.map((item) => {
          let updatedItem = {
            ...item,
            inCart: false,
            price: Math.ceil(item.price),
            quantity: 0,
          };
          return updatedItem;
        });

        setProductList(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Encountered a network error</p>;

  const cartArray = productList.filter((product) => product.inCart === true);

  return (
    <>
      <NavBar numItems={cartArray.length} />
      {name === "home" ? (
        <Home />
      ) : name === "shop" ? (
        <Shop productList={productList} setProductList={setProductList} />
      ) : name === "cart" ? (
        <Cart productList={productList} setProductList={setProductList} />
      ) : Number(name) > 0 && Number(name) <= productList.length ? (
        <ProductPage
          item={productList[name - 1]}
          productList={productList}
          setProductList={setProductList}
        />
      ) : (
        <Shop productList={productList} setProductList={setProductList} />
      )}
    </>
  );
}

export default App;

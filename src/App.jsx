import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const { name } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([
    {
      title: "Corduroy Pants",
      price: 8.35,
      description: `Yellow`,
      image: "#",
      category: "Men's Clothing",
      inCart: true,
    },
    {
      title: "Dad Hat",
      price: 22.5,
      description: `Cotton`,
      image: "#",
      category: "hats",
      inCart: false,
    },
    {
      title: "Leather Jacket",
      price: 89.99,
      description: `100% genuine leather`,
      image: "#",
      category: "Men's Clothing",
      inCart: true,
    },
  ]);

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
          let updatedItem = { ...item, inCart: false };
          return updatedItem;
        });

        // const updatedList = [...productList];
        // updatedList.push(data);
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
        <Cart productList={productList} setproductList={setProductList} />
      ) : (
        <Home />
      )}
    </>
  );
}

export default App;

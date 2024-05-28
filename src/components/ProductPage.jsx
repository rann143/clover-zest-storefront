import { Link } from "react-router-dom";

function ProductPage({ item, productList, setProductList }) {
  function addToCart(e) {
    e.preventDefault();
    const updatedProductList = [...productList];
    item.inCart = true;
    item.quantity = 1;
    updatedProductList.map((product) =>
      product.id === item.id ? item : product
    );
    setProductList(updatedProductList);
  }

  function removeFromCart() {
    const updatedProductList = [...productList];
    item.inCart = false;
    updatedProductList.map((product) =>
      product.id === item.id ? item : product
    );
    setProductList(updatedProductList);
  }

  return (
    <div>
      <img src={item.image} alt={"image of " + item.title} />
      <h3>{item.title}</h3>
      <p>
        <strong>Price:</strong> ${item.price}
      </p>
      <p>{item.description}</p>
      <button
        className={item.inCart ? "hidden" : "visible"}
        onClick={addToCart}
      >
        Add to Cart
      </button>
      <p className={item.inCart ? "added" : "hidden"}>Added!</p>
      <button
        className={item.inCart ? "visible" : "hidden"}
        onClick={removeFromCart}
      >
        Remove from Cart
      </button>
      <Link to="/shop">Return to Shop</Link>
    </div>
  );
}

export default ProductPage;

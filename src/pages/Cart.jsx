import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";
import { useState } from "react";
import "../index.css";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Cart({ productList, setProductList, totalPrice, setTotalPrice }) {
  const [cartData, setCartData] = useState([]);

  const cartArray = productList
    .filter((item) => item.inCart === true)
    .map((item) => {
      return (
        <CartCard
          key={item.id}
          item={item}
          productList={productList}
          setProductList={setProductList}
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
          cartData={cartData}
          setCartData={setCartData}
        />
      );
    });

  return (
    <>
      <h2>My Cart</h2>
      <p>Total: {totalPrice}</p>
      <p className={cartArray.length ? "hidden" : "visible"}>
        No Items in Cart
      </p>
      <CartContainer>{cartArray}</CartContainer>
    </>
  );
}

export default Cart;

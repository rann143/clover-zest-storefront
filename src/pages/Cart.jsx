import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import CartCard from "../components/CartCard";
import { useState } from "react";
import "../index.css";

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

function Cart({ productList, setProductList }) {
  const cartArray = productList
    .filter((item) => item.inCart === true)
    .map((item) => {
      return (
        <CartCard
          key={item.id}
          item={item}
          productList={productList}
          setProductList={setProductList}
        />
      );
    });

  const totalP = productList
    .filter((item) => item.inCart === true)
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
  console.log(totalP);

  return (
    <>
      <h2>My Cart</h2>
      <p>Total: ${totalP}</p>
      <button
        className={cartArray.length ? "visible" : "hidden"}
        onClick={() => alert("Thanks for shopping!")}
      >
        Checkout
      </button>
      <p className={cartArray.length ? "hidden" : "visible"}>
        No Items in Cart
      </p>
      <CartContainer>{cartArray}</CartContainer>
    </>
  );
}

export default Cart;

import styled from "styled-components";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

const CartContainer = styled.div`
  display: flex;
`;

function Cart({ productList, setProductList }) {
  const cartArray = productList
    .filter((item) => item.inCart === true)
    .map((item) => (
      <ProductCard
        key={item.id}
        item={item}
        productList={productList}
        setProductList={setProductList}
      />
    ));

  return (
    <>
      <h2>My Cart</h2>
      <CartContainer>{cartArray}</CartContainer>
    </>
  );
}

export default Cart;

import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ShopContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 4rem;
`;

const H2 = styled.h2``;

function Shop({ productList, setProductList }) {
  const productArray = productList.map((product) => (
    <ProductCard
      key={product.id}
      item={product}
      productList={productList}
      setProductList={setProductList}
    />
  ));

  return (
    <>
      <H2>Shop</H2>
      <ShopContainer>{productArray}</ShopContainer>
    </>
  );
}

export default Shop;

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const ShopContainer = styled.div`
  display: flex;
`;

function Shop({ cartItems = [], setCartItems }) {
  return <ShopContainer>Shop</ShopContainer>;
}

export default Shop;

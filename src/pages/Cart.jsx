import styled from "styled-components";
import ProductCard from "../components/ProductCard";

const CartContainer = styled.div`
  display: flex;
`;

function Cart({ cartItems = [], setCartItems }) {
  const cartArray = cartItems.map((item, index) => (
    <ProductCard key={index} item={item} />
  ));

  return <CartContainer>{cartArray}</CartContainer>;
}

export default Cart;

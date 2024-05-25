import styled from "styled-components";
import "../index.css";
import { useState } from "react";

const ShopCard = styled.div`
  background-color: white;
  border: solid 1px black;
  width: 200px;
  height: 400px;
  padding: 0.25rem;
  margin: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
`;

const Img = styled.img`
  width: 90%;
  height: 50%;
  borderradius: 10px;
  margin: 0 2rem 2rem 2rem;
  position: absolute;
  top: 5px;
`;

function ProductCard({ item, productList, setProductList }) {
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
    <ShopCard>
      <Img src={item.image} />
      <h3>{item.title}</h3>
      <p>
        <strong>Price:</strong> ${item.price}
      </p>
      {/* <p>{item.description}</p> */}
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
        Remove
      </button>
    </ShopCard>
  );
}

export default ProductCard;

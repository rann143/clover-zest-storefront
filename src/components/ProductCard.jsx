import styled from "styled-components";
import "../index.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const ShopCard = styled.div`
  background-color: white;
  border: solid 1px black;
  padding: 0.25rem;
  margin: 0.75rem;
  width: 10rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 2fr 2fr 30px 30px;
  gap: 0.25rem;
  align-items: center;
  font-size: 15px;
  text-align: center;
`;

const Button = styled.button`
  background-color: lightblue;
  border-radius: 5px;
  border: none;
  padding: 0.25rem;
  margin: 0.25rem 2rem;
  grid-row: 4/5;
  font-size: 15px;

  ${({ inCart }) =>
    !inCart &&
    `
    display: block;
  `}

  ${({ inCart }) =>
    inCart &&
    `
    display:none;
    visibility: hidden;
    `}
`;

const RemoveButton = styled.button`
  background-color: red;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: none;
  grid-row: 5/6;
  padding: 0;

  ${({ inCart }) =>
    !inCart &&
    `
    display:none;
    visibility: hidden;
  `}

  ${({ inCart }) =>
    inCart &&
    `
    display: block
    `}
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  top: 5px;
  grid-row: 1/2;
  grid-column: 1/2;
  justify-self: center;
`;

const P = styled.p`
  margin: 0;
  grid-row: 3/4;
  align-self: center;
`;

const AddedP = styled.p`
  margin: 0;
  grid-row: 4/5;
  background-color: lightgreen;
  text-align: center;
  padding: 0.25rem;
  margin: 0 3rem;
  border-radius: 5px;
  display: none;
  visibility: hidden;

  ${({ inCart }) =>
    inCart &&
    `display: block;
  visibility: visible;`}
`;

const H3 = styled.h3`
  margin: 0;
  grid-row: 2/3;
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
      <H3>
        <Link to={"/" + item.id}>{item.title}</Link>
      </H3>
      <P>
        <strong>Price:</strong> ${item.price}
      </P>

      <Button inCart={item.inCart} onClick={addToCart}>
        Add to Cart
      </Button>

      <AddedP inCart={item.inCart}>Added!</AddedP>

      {/* <RemoveButton inCart={item.inCart} onClick={removeFromCart}>
        X
      </RemoveButton> */}
    </ShopCard>
  );
}

export default ProductCard;

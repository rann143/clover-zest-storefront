import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(300px, 2fr);
  grid-template-rows: 3rem 2rem 100px 100px 50px;
  gap: 5px;
  align-items: center;
  justify-items: start;
  margin: 2rem;
`;

const Img = styled.img`
  grid-column: 1/2;
  grid-row: 1/5;
  width: 200px;
  margin: 0.5rem 0;
  align-self: start;
  justify-self: center;
`;

const H3 = styled.h3`
  grid-column: 2/3;
  grid-row: 1/2;
  align-self: start;
  margin: 0;
`;

const Button = styled.button`
  background-color: lightblue;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 4rem;
  margin: 0.25rem 0;
  grid-row: 4/5;
  grid-column: 2/3;
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
  background-color: lightblue;
  border-radius: 5px;
  border: none;
  padding: 0.5rem 4rem;
  margin: 0.25rem 0;
  grid-row: 4/5;
  grid-column: 2/3;
  font-size: 15px;

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

const AddedP = styled.p`
  grid-row: 5/6;
  grid-column: 1/2;
  background-color: lightgreen;
  text-align: center;
  justify-self: center;
  padding: 0.5rem;
  border-radius: 5px;
  display: none;
  visibility: hidden;

  ${({ inCart }) =>
    inCart &&
    `display: block;
  visibility: visible;`}
`;

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
    <Div>
      <Img src={item.image} alt={"image of " + item.title} />
      <H3>{item.title}</H3>
      <p
        style={{
          "grid-column": "2/3",
          "grid-row": "2/3",
          "font-size": ".9rem",
        }}
      >
        <strong>Price:</strong> ${item.price}
      </p>
      <p
        style={{
          "grid-column": "2/3",
          "grid-row": "3/4",
          "font-size": ".9rem",
        }}
      >
        <strong>Description: </strong>
        {item.description}
      </p>
      <Button inCart={item.inCart} onClick={addToCart}>
        Add to Cart
      </Button>
      <AddedP inCart={item.inCart}>Added!</AddedP>
      <RemoveButton inCart={item.inCart} onClick={removeFromCart}>
        Remove From Cart
      </RemoveButton>
      <Link
        to="/shop"
        style={{
          "grid-column": "2/3",
          "grid-row": "5/6",
          "font-size": ".8rem",
        }}
      >
        Return to Shop
      </Link>
    </Div>
  );
}

export default ProductPage;

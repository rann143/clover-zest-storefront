import styled from "styled-components";
import "../index.css";
import { useState } from "react";

const Card = styled.div`
  background-color: white;
  border: solid 1px black;
  width: 1000px;
  height: 200px;
  padding: 0.25rem;
  margin: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
  background-color: lightblue;
  position: absolute;
  margin: 5px;
  bottom: 0;
  left: 0;
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  borderradius: 10px;
  margin: 0 2rem 2rem 2rem;
`;

function CartCard({
  item,
  productList,
  setProductList,
  totalPrice,
  setTotalPrice,
  cartData,
  setCartData,
}) {
  const [finalData, setFinalData] = useState({
    quantity: 1,
    price: item.price,
  });

  function removeFromCart() {
    const updatedProductList = [...productList];
    item.inCart = false;
    updatedProductList.map((product) =>
      product.id === item.id ? item : product
    );
    setProductList(updatedProductList);
    setTotalPrice(totalPrice - finalData.price);
  }

  function handleQuantityChange(e) {
    setFinalData({
      price: item.price * Number(e.target.value),
      quantity: e.target.value,
    });
  }

  return (
    <Card>
      <Img src={item.image} />
      <h3>{item.title}</h3>
      <label>
        Quantity:
        <input
          name="quantity"
          type="number"
          min="1"
          max="100"
          value={finalData.quantity}
          onChange={handleQuantityChange}
        />
      </label>
      <p>
        <strong>Price:</strong> ${finalData.price}
      </p>
      <Button onClick={removeFromCart}>Remove from Cart</Button>
    </Card>
  );
}

export default CartCard;

import styled from "styled-components";
import "../index.css";

const StyledCard = styled.div`
  background-color: white;
  border: solid 1px black;
  width: 200px;
  height: 500px;
  padding: 0.25rem;
  margin: 0.25rem;
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

function ProductCard({ item, productList, setProductList }) {
  function addToCart(e) {
    e.preventDefault();
    const updatedProductList = [...productList];
    item.inCart = true;
    updatedProductList.map((product) =>
      product.id === item.id ? item : product
    );
    setProductList(updatedProductList);
  }

  return (
    <StyledCard>
      <img
        src={item.image}
        style={{
          width: "200px",
          height: "250px",
          borderRadius: "10px",
          margin: "0 2rem 2rem 2rem",
          position: "absolute",
          top: "5px",
        }}
      />
      <h3>{item.title}</h3>
      <p>
        <strong>Price:</strong> ${item.price}
      </p>
      {/* <p>{item.description}</p> */}
      <button
        // className={item.inCart ? "hidden" : "visible"}
        onClick={addToCart}
      >
        Add to Cart
      </button>
      <label
      //   className={item.inCart ? "visible" : "hidden"}
      >
        Quantity:
        <input
          type="number"
          id="quantity"
          name="quantity"
          max="10"
          style={{ margin: "0.25rem", width: "2rem" }}
        />
      </label>
    </StyledCard>
  );
}

export default ProductCard;

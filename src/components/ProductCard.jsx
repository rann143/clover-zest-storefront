import styled from "styled-components";
import "../index.css";

const StyledCard = styled.div`
  background-color: rgb(250, 235, 215);
  border: solid 1px black;
  padding: 0.25rem;
  margin: 0.25rem;
`;

const Button = styled.button`
  background-color: white;
  border-radius: 5px;
  border: none;
`;

function ProductCard({ item }) {
  return (
    <StyledCard>
      <h3>{item.title}</h3>
      <p>
        <strong>Price:</strong> ${item.price}
      </p>
      <p>{item.description}</p>
      <button className={item.inCart ? "hidden" : "visible"}>
        Add to Cart
      </button>
      <label>
        Quantity:
        <input
          type="number"
          id="quantity"
          name="quantity"
          max="10"
          value={item.inCart ? "1" : "0"}
          style={{ margin: "0.25rem", width: "2rem" }}
        />
      </label>
    </StyledCard>
  );
}

export default ProductCard;

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNavBar = styled.nav`
  background-color: #bcffbd;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: 2rem;
  padding: 0 1rem;
  width: 100%;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
`;

function NavBar({ numItems }) {
  return (
    <StyledNavBar>
      <h1>Clover Zest Design</h1>
      <StyledUl>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({numItems})</Link>
        </li>
      </StyledUl>
    </StyledNavBar>
  );
}

export default NavBar;

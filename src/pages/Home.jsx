import image from "../alejo-reinoso--IlmDnJg5cg-unsplash.jpg";
import styled from "styled-components";

const Img = styled.img`
  width: 500px;
  height: 600px;
`;

function Home() {
  return (
    <>
      <h1>Home</h1>
      <p>WELCOME TO CLOVER ZEST DESIGN!</p>
      <Img src={image} />
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/@alejoreinoso?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Alejo Reinoso
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/photos/blue-denim-jeans-on-blue-denim-jeans--IlmDnJg5cg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
          Unsplash
        </a>
      </p>
    </>
  );
}

export default Home;

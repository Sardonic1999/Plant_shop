import React from "react";
import { Wrapper, Container, Text, Img } from "./Shop_Style";
import last from "../assets/last.png";

const Shop = () => {
  return (
    <Wrapper>
      <Container>
        <Text>
          <h1>
            Get your favourites plant on <br /> our shop now
          </h1>
          <button>Visit Shop</button>
        </Text>
        <Img src={last} />
      </Container>
    </Wrapper>
  );
};

export default Shop;

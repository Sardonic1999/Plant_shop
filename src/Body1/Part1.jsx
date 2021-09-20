import React from "react";
import {
  Wrapper,
  Left,
  Right,
  Img,
  Logo,
  Navbar,
  Sign,
  Sign2,
  Pre,
  Container,
  Next,
} from "./Part1_Style";
import main0 from "../assets/main0.png";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import shopping from "../assets/shopping.png";
import left from "../assets/left.png";
import right from "../assets/right.png";

const Part1 = () => {
  return (
    <Wrapper>
      <Left>
        <Img src={main0} />

        <Logo src={logo} />
      </Left>
      <Right>
        <Navbar>
          <img src={search} alt="" />
          <img src={shopping} alt="" />
          <Sign>Sign up</Sign>
          <Sign2>Sign in</Sign2>
        </Navbar>
        <h1>
          Kembang <br /> Flower Mantap
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been the <br /> industry's
          standard dummy text ever since the 1500s,{" "}
        </p>
        <Container>
          <Pre>
            <img src={left} alt="" />
            <h2>Kaktus Plant</h2>
          </Pre>
          <Next>
            <img src={right} alt="" />
            <h2>Rahasia Plant</h2>
          </Next>
        </Container>
      </Right>
    </Wrapper>
  );
};

export default Part1;

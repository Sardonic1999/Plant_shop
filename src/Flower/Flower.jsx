import React from "react";
import { Container, Title, Flow, Con } from "./Flower_Style";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img55 from "../assets/img55.png";

const Flower = () => {
  return (
    <Container>
      <Title>
        <h1>Featured Plants</h1>
        <select>
          <option>cheap</option>
          <option>expensive</option>
        </select>
      </Title>
      <Flow>
        <Con>
          <img src={img1} alt="" />
          <h4>Kaktus Plants</h4>
          <p>IDR 85.000</p>
        </Con>
        <Con>
          <img src={img2} alt="" />
          <h4>Landak Plants</h4>
          <p>IDR 105.000</p>
        </Con>
        <Con>
          <img src={img3} alt="" />
          <h4>Kecubung Plants</h4>
          <p>IDR 85.000</p>
        </Con>
        <Con>
          <img src={img4} alt="" />
          <h4>Kecubung Plants</h4>
          <p>IDR 85.000</p>
        </Con>
        <Con>
          <img src={img55} alt="" />
          <h4>Kecubung Plants</h4>
          <p>IDR 85.000</p>
        </Con>
      </Flow>
    </Container>
  );
};

export default Flower;

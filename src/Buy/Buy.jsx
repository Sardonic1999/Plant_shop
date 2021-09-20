import React from "react";
import { Wrapper, Left, Right } from "./Buy_Style";
import main2 from "../assets/main2.png";
import main1 from "../assets/main1.png";

const Buy = () => {
  return (
    <Wrapper>
      <Left>
        <h1>
          Buy more plants, it <br /> helps you to be relaxed
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
          gravida gravida aliquam. Pellentesque et lobortis nisl. Sed et <br />
          mauris justo. Nulla eu enim non mauris maximus dignissim. <br />
          Maecenas vitae eros sapien. Quisque pellentesque tempus <br />
          dignissim.
        </p>
        <img src={main2} alt="" />
      </Left>
      <Right>
        <img src={main1} alt="" />
      </Right>
    </Wrapper>
  );
};

export default Buy;

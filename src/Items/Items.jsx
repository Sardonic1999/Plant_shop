import React from "react";
import { Wrapper, Tree } from "./Items_Style";
import fast from "../assets/fast.png";
import head from "../assets/head.png";
import plant from "../assets/plant.png";
import dollar from "../assets/dollar.png";

const Items = () => {
  return (
    <Wrapper>
      <Tree>
        <img src={fast} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. Lorem <br /> Ipsum has been the industry's
          standard{" "}
        </p>
      </Tree>
      <Tree>
        <img src={head} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. Lorem <br /> Ipsum has been the industry's
          standard{" "}
        </p>
      </Tree>
      <Tree>
        <img src={plant} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. Lorem <br /> Ipsum has been the industry's
          standard{" "}
        </p>
      </Tree>
      <Tree>
        <img src={dollar} alt="" />
        <p>
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. Lorem <br /> Ipsum has been the industry's
          standard{" "}
        </p>
      </Tree>
    </Wrapper>
  );
};

export default Items;

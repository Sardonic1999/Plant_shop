import React from "react";
import Part1 from "./Body1/Part1";
import Items from "./Items/Items";
import Flower from "./Flower/Flower";
import Buy from "./Buy/Buy";
import Shop from "./Shop/Shop";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <Part1 />
      <Items />
      <Flower />
      <Buy />
      <Shop />
      <Footer />
    </div>
  );
};

export default Root;

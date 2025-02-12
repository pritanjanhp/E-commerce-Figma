import DisplayProduct from "@/components/crud/DisplayProduct";
import GameProduct from "@/components/productData/GameProduct";
import React from "react";

const page = () => {
  return (
    <div>
      {/* <GameProduct /> */}
      <DisplayProduct />

      {/* <DisplayProduct category="gaming" /> */}
    </div>
  );
};

export default page;

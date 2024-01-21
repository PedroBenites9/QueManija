import React from "react";
import producto from "./ropa";

// import Card from "./Card";
import CardProduct from "./CardProduct";

const Productos = () => {
  return (
    <>
      <CardProduct {...producto} />
    </>
  );
};

export default Productos;

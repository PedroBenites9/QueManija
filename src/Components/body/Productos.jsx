import React from "react";
import producto from "./ropa";

// import Card from "./Card";
import CardProduct from "./CardProduct";

const Productos = () => {
  return (
    <div className="card__contenedor">
      {producto
        .filter((e) => e.nameProduct === "Remera Oversize")
        .map((e) => (
          <CardProduct {...e} />
        ))}
    </div>
  );
};

export default Productos;

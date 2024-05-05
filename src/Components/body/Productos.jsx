import React from "react";
import "../../css/App.css";
import Remera from "./Card/Remera";

const Productos = ({ remera }) => {
  return (
    <div className="contenedor__card">
      <Remera clothes={remera} />
      {/* <Gorras {...producto} /> */}
    </div>
  );
};

export default Productos;

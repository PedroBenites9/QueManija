import React from "react";
import producto from "./ropa";
// import Card from "./Card";
// import CardProduct from "./CardProduct";
// import Remera from "./Card/Remera";
import "../../css/App.css";
import fotoBody from "../../img/imgHombre.JPG";
import Gorras from "./Card/Gorras";
import Remera from "./Card/Remera";

const Productos = ({ remera }) => {
  return (
    <div className="contenedor__card">
      <Remera clothes={remera} />
      <img className="body__img" src={fotoBody} alt="foto hombre" srcset="" />
      <h3>Añadile mas estilo a tu look!</h3>
      <Gorras {...producto} />
    </div>
  );
};

export default Productos;

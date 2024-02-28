import React from "react";
import producto from "./ropa";
// import Card from "./Card";
// import CardProduct from "./CardProduct";
import Remera from "./Card/Remera";
import "../../css/App.css";
import fotoBody from "../../img/imgHombre.JPG";
import Gorras from "./Card/Gorras";

const Productos = () => {
  return (
    /**
     ** Será un contenedor de todos los productos a ofrecer,
     ** solo es cuestion de crear una componente tipo 'Card' y colocarlo aqui
     */

    <div className="contenedor__card">
      <Remera {...producto} />
      <img className="body__img" src={fotoBody} alt="foto hombre" srcset="" />
      <Gorras {...producto} />
    </div>
  );
};

export default Productos;

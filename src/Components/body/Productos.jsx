import React from "react";
import producto from "./ropa";
// import Card from "./Card";
// import CardProduct from "./CardProduct";
import Remera from "./Card/Remera";
import "../../css/App.css";

const Productos = () => {
  return (
    /**
     ** Será un contenedor de todos los productos a ofrecer,
     ** solo es cuestion de crear una componente tipo 'Card' y colocarlo aqui
     */

    <div className="contenedor__card">
      <Remera {...producto} />
    </div>
  );
};

export default Productos;

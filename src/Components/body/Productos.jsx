import React from "react";
import "../../css/App.css";
import Gorras from "./Card/Gorras";
import Remera from "./Card/Remera";

const Productos = ({ remera }) => {
  return (
    <div className="contenedor__card">
      <Remera clothes={remera} />
      {/* <img className="body__img" src={fotoBody} alt="foto hombre" srcset="" /> */}
      {/* <h3>Añadile mas estilo a tu look!</h3> */}
      {/* <Gorras {...producto} /> */}
    </div>
  );
};

export default Productos;

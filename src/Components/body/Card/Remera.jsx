/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import ropas from "../ropa";
import React from "react";

const Remera = () => {
  const remera = ropas.find(encontrarRemeras);
  function encontrarRemeras(remeras) {
    return remeras.nameProduct === "Remera Oversize";
  }

  remera.variant.map((e) => console.log(e.img));

  return (
    <>
      <div className="card">
        {/* la imagen */}
        <img src={remera.variant.map((e) => e.img)} alt="" srcset="" />
        {/* Nombre de producto */}

        {/* precio */}

        {/* colores */}

        {/* talla */}

        {/* boton de compra */}
      </div>
    </>
  );
};

export default Remera;

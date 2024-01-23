/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import React from "react";
import { Carousel } from "react-responsive-carousel";

const Remera = (leRemera) => {
  // name[0].img.map((e) => console.log(e));

  const { category, name, price, img, size } = leRemera[0];

  console.log(img);

  return (
    <>
      <div className="card">
        {/* la imagen */}
        <Carousel>
          <div>
            <img src={""} alt={""} />
          </div>
        </Carousel>
        {/* Nombre de producto */}
        <h3>{name}</h3>
        {/* precio */}
        <span>${price}</span>
        {/* colores */}

        {/* talla */}
        {size.map((e) => (
          <button>{e}</button>
        ))}
        {/* boton de compra */}
      </div>
    </>
  );
};

export default Remera;

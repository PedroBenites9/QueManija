/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../../css/App.css";

const Remera = (leRemera) => {
  const { name, price, img, size, variant } = leRemera[2];
  // {variant.map((e) =>
  //   e.img.map((imag) => <img src={imag} alt={name} />)
  // )}

  return (
    <>
      <div className="card">
        {/* la imagen */}
        <Carousel showArrows={true} autoPlay={true}>
          {variant.map((e, id) => (
            <>
              <div style={{ backgroundColor: "red" }}>
                <img className="card__carousel-img" src={e.img} alt={name} />
              </div>
            </>
          ))}
        </Carousel>

        {/*  Nombre de producto */}
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

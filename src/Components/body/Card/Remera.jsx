/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheck } from "react-icons/fa";

import "../../../css/App.css";

const Remera = (leRemera) => {
  const { name, price, category, variant } = leRemera[0];
  const color = variant.map((e) => e.color.hex);

  const [colores, setColores] = useState(color[0]); // asignarle color al boton y luego

  const ImgCard = ({ urlImg }) => {
    return (
      <>
        {variant.map((e) => (
          <>
            {e.color.hex === colores ? <img src={urlImg} alt={name} /> : null}
          </>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="card">
        {/* la imagen */}
        <Carousel
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          {variant.map((e) =>
            // hacer un filtrado
            e.color.hex === colores ? (
              e.img.map((pathImg, id) => (
                <div key={id}>
                  <ImgCard urlImg={pathImg} />
                </div>
              ))
            ) : (
              <h3>un h3</h3>
            )
          )}
        </Carousel>
        <div className="card__content">
          {/*  Nombre de producto */}
          <h3 className="card__title">{name}</h3>
          {/* precio */}
          <span>${price}</span>
          <p>{category}</p>
          {/* boton de compra */}
          <div className="card__colors">
            {variant.map((e) => (
              <button
                className={colores === e.color.hex ? "btn active" : "btn"}
                style={{ backgroundColor: e.color.hex }}
                onClick={() => setColores(e.color.hex)}
              >
                {colores === e.color.hex ? (
                  <FaCheck style={{ color: "#717171" }} />
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Remera;

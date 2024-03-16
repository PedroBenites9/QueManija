/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import React, { useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";

//import estilos
import "../../../css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Remera = (leRemera) => {
  const { name, price, variant, size } = leRemera[0];
  const color = variant.map((e) => e.color.hex);
  const sizeRemera = size.map((e) => e);
  const [colores, setColores] = useState(color[0]);
  const [talla, setTalla] = useState(sizeRemera[0]);
  const miStorage = window.localStorage;

  // Settings para personalizar el carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const ImgCard = ({ urlImg }) => {
    return (
      <>
        <>
          {/** img */}
          <img className="card__carousel-img" src={urlImg} alt={name} />
        </>
      </>
    );
  };

  const Carousel = () => {
    return (
      <>
        <Slider {...settings}>
          {variant.map((e) =>
            e.color.hex === colores
              ? e.img.map((pathImg) => (
                  <div className="card__carousel">
                    <ImgCard urlImg={pathImg} />
                  </div>
                ))
              : null
          )}
        </Slider>
      </>
    );
  };

  return (
    <>
      <div className="card">
        {/*Card Carousel*/}
        <Carousel />
        {/* Data Carousel */}
        <div className="card__content">
          {/*  Nombre de producto */}
          <h3 className="card__title">{name}</h3>
          {/* precio */}
          <span>${price}</span>
          {/* boton de compra */}
          <div className="card__date">
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
            <div>
              <select id="size__ropa" name="size">
                {size.map((e) => (
                  <option value={() => setTalla(e)}>{console.log(e)}</option>
                ))}
              </select>
            </div>
            {/* utilizar useState para almacenar informacion  */}
            <button onClick={() => alert(talla)} className="button">
              Agregar carrito
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Remera;

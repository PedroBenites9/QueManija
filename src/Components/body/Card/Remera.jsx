/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";

//import estilos
import "../../../css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Remera = (leRemera) => {
  const { name, price, category, variant } = leRemera[0];
  const color = variant.map((e) => e.color.hex);

  const [colores, setColores] = useState(color[0]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const ImgCard = ({ urlImg }) => {
    return (
      <>
<<<<<<< HEAD
        {variant.map((e) => (
          <>
            {e.color.hex === colores ? <img src={urlImg} alt={name} /> : null}
          </>
        ))}
=======
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
>>>>>>> pc
      </>
    );
  };

  return (
    <>
      <div className="card">
<<<<<<< HEAD
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
=======
        {/*Card Carousel*/}
        <Carousel />
        {/* Data Carousel */}
>>>>>>> pc
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

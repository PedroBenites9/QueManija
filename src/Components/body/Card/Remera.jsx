/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

//import librerias
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Slider from "react-slick";

//import estilos
import "../../../css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Remera = (leRemera) => {
  const { name, price, variant } = leRemera[0];
  const color = variant.map((e) => e.color.hex);
<<<<<<< HEAD
  const [colores, setColores] = useState(color[0]);

<<<<<<< HEAD
  const hasChild =
    document.getElementsByClassName(".parent").hasChildNodes === false;
=======
=======
>>>>>>> notebook
  const [colores, setColores] = useState(color[0]);

  // Settings para personalizar el carousel
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
>>>>>>> cb33ecaf3c55389a874943ea2589a120adc11b7e

  const removeLiEmpty = () => {
    if (hasChild) {
      console.log("nothing");
    } else {
      console.log("tiene algo");
    }
  };
  const ImgCard = ({ urlImg }) => {
    return (
      <>
        {/** img */}
        <img className="card__carousel-img" src={urlImg} alt={name} />
      </>
    );
  };

  const Carousel = () => {
    return (
      <>
        <Slider {...settings}>
          {variant.map((e) =>
            e.color.hex === colores
              ? e.img.map((pathImg, id) => (
                  <div id={id} className="card__carousel">
                    <ImgCard urlImg={pathImg} />
                  </div>
                ))
              : null
          )}
        </Slider>
      </>
    );
  };
  // return
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
          className="parent"
        >
          {variant.map((e) =>
            // hacer un filtrado
            e.color.hex === colores
              ? e.img.map((pathImg, id) => (
                  <div className="card__carousel-img" key={id}>
                    <ImgCard urlImg={pathImg} />
                  </div>
                ))
              : removeLiEmpty()
          )}
        </Carousel>
=======
        {/*Card Carousel*/}
        <Carousel />
        {/* Data Carousel */}
>>>>>>> cb33ecaf3c55389a874943ea2589a120adc11b7e
        <div className="card__content">
          {/*  Nombre de producto */}
          <h3 className="card__title">{name}</h3>
          {/* precio */}
          <span>${price}</span>
          {/*
           * agregar boton de compra */}

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

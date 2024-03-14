/**
 * * Por ahora solo van a ver dos tipos de remeras, con y sin estampado
 * * Hasta le fecha solo se ofrecen remeras Oversize
 * * En esta Card de remera, va a tener un slider
 */

//import librerias
import React from "react";
import Slider from "react-slick";

//import estilos
import "../../../css/App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gorras = (leRemera) => {
  const { name, price, data } = leRemera[1];

  // Settings para personalizar el carousel
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
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
          {data.map((e) => (
            <>
              <div>
                <ImgCard urlImg={e.img} />
              </div>
              <p className="p__producto">{e.nameProd}</p>
            </>
          ))}
        </Slider>
      </>
    );
  };
  // return
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
          <div className="card__colors"></div>
          <button>Agrega carrito</button>
        </div>
      </div>
    </>
  );
};

export default Gorras;

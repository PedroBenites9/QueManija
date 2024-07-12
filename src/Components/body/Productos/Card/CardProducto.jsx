import ImagenesCard from "../../Card/ImagenesCard";
import "./cardProducto.css";
import "aos/dist/aos.css"; //global aos css style

import AOS from "aos";

AOS.init();

export function CardProducto({ producto }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="700"
      className="contenedor"
    >
      <form className="card__contenedor">
        {producto.map((data, key) => (
          <div key={key} className="card">
            <ImagenesCard url={data.imagen} className="card__imagen" />

            <div
              className="card__product"
              onClick={() => {
                const text = `Hola! Quisiera saber si quedo stock de ${data.title}`;
                window.location.href =
                  `https://wa.me/5491151491715?text=+` + text;
              }}
            >
              <h3>{data.title}</h3>
              {/* <p>{data.description}</p> */}
              <span>${data.precio}</span>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
}

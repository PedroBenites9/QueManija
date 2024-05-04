import "../../css/home.css";
import { CarouselHandle } from "./Card/CarouselHandle";
import foto1 from "../../img/imgCarouselHome/HombreRemeraBlanco.JPG";
import foto3 from "../../img/imgCarouselHome/HombreRemeraBordo3.JPG";
import foto2 from "../../img/imgCarouselHome/imgMujer.JPG";
const images = [
  {
    imgPath: `${foto1}`,
  },
  {
    imgPath: `${foto2}`,
  },
  {
    imgPath: `${foto3}`,
  },
];

export function Home() {
  return (
    <div className="home">
      <div className="home__carousel">
        <CarouselHandle images={images} altura={"100vh"} />
      </div>
      <div className="home__contenedor">
        <div className="home__text  ">
          <h3>Define tu estilo urbano</h3>
          <p>resalta ante el mundo </p>
          <p>simple o llamativo, es lo que vos finas</p>
        </div>
        <button
          className="button-54"
          onClick={() => {
            alert("hola xd :v");
          }}
        >
          que manija!
        </button>
      </div>
    </div>
  );
}

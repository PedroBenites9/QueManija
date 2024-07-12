import "../../css/home.css";
import { CarouselHandle } from "./Card/CarouselHandle";
import foto1 from "../../img/imgCarouselHome/HombreRemeraBlanco.JPG";
import foto2 from "../../img/imgCarouselHome/imgMujer.JPG";
import foto3 from "../../img/imgCarouselHome/HombreRemeraBordo3.JPG";
import foto4 from "../../img/imgCarouselHome2/fondoHome.png";
import foto5 from "../../img/imgCarouselHome2/imgHombre3.JPG";
import foto6 from "../../img/imgCarouselHome2/imgHombre2.JPG";
import useScreenSize from "../../hooks/useScreenSize";

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
const images2 = [
  {
    imgPath: `${foto4}`,
  },
  {
    imgPath: `${foto5}`,
  },
  {
    imgPath: `${foto6}`,
  },
];

export function Home() {
  const { width } = useScreenSize();

  return (
    <div className="home">
      <div className="home__carousel">
        {width <= 750 ? (
          <CarouselHandle images={images} altura={"100vh"} objFit="cover" />
        ) : (
          <CarouselHandle images={images2} altura={"100vh"} objFit="contain" />
        )}
      </div>
      <div className="home__contenedor">
        <div className="home__text  ">
          <h3>Que Manija Urbana: Tu tienda de moda streetwear</h3>
          <p></p>
        </div>
        {/* <button className="button-54">que manija!</button> */}
      </div>
    </div>
  );
}

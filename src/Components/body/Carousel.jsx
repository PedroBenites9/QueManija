import * as React from "react";
import Box from "@mui/material/Box";
import foto1 from "../../img/imgHombre3.JPG";
import foto2 from "../../img/imgHombre.JPG";
import foto3 from "../../img/imgHombre2.JPG";
import foto4 from "../../img/Remeras/imgMujer3.JPG";
import { CarouselHandle } from "./Card/CarouselHandle";

const images = [
  {
    title: "hombre camisa negra",
    imgPath: `${foto1}`,
  },
  {
    title: "hombre camisa blanca",
    imgPath: `${foto2}`,
  },
  {
    title: "hombre camisa",
    imgPath: `${foto3}`,
  },
  {
    title: "mujer sentada",
    imgPath: `${foto4}`,
  },
];

function Carousel() {
  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <CarouselHandle images={images} altura="400px" objFit={"fill"} />
    </Box>
  );
}

export default Carousel;

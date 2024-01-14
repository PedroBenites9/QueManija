import React, { useState } from "react";
import producto from "./ropa";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import foto1 from "../../img/imgHombre3.JPG";
import foto2 from "../../img/imgHombre.JPG";
import foto3 from "../../img/imgHombre2.JPG";
import foto4 from "../../img/imgMujer3.JPG";
import { Button } from "@mui/material";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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

const leKey = () => {
  return images.map((img) => img.title);
};
const Productos = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <div className="card__contenedor">
        {producto.map((ropa) => (
          <div className="card" key={ropa.nameProducto}>
            <Box sx={{ maxWidth: "100%", flexGrow: 1 }} key={leKey()}>
              <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                enableMouseEvents
              >
                {images.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <Box
                        component="img"
                        sx={{
                          height: 255,
                          display: "block",
                          maxWidth: "500px",
                          aspectRatio: "1/1",
                          objectFit: "cover",
                          overflow: "hidden",
                          width: "100%",
                        }}
                        src={ropa.img.remera1}
                        alt={ropa.color}
                      />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <MobileStepper
                sx={{ bgcolor: "transparent" }}
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                  <Button
                    sx={{ color: "white" }}
                    size="small"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowLeft />
                    ) : (
                      <KeyboardArrowRight />
                    )}
                  </Button>
                }
                backButton={
                  <Button
                    sx={{ color: "white" }}
                    size="small"
                    onClick={handleBack}
                    disabled={activeStep === 0}
                  >
                    {theme.direction === "rtl" ? (
                      <KeyboardArrowRight />
                    ) : (
                      <KeyboardArrowLeft />
                    )}
                  </Button>
                }
              />
            </Box>
            <h3 className="card__titleRopa">{ropa.nameProducto}</h3>
            <div className="card__contenedor-info-color">
              <button>w</button>
              <button>r</button>
              <button>g</button>
              <button>y</button>
            </div>
            <div>
              <button>-1</button>
              <span>0</span>
              <button>+1</button>
            </div>
            <button>Agregar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Productos;

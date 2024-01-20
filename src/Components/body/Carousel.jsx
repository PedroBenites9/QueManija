import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import foto1 from "../../img/imgHombre3.JPG";
import foto2 from "../../img/imgHombre.JPG";
import foto3 from "../../img/imgHombre2.JPG";
import foto4 from "../../img/Remeras/imgMujer3.JPG";

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

function Carousel() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const leKey = () => {
    return images.map((img) => img.title);
  };
  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }} key={leKey()}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          height: 50,
          pl: 2,
          bgcolor: "none",
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
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
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      {/* <MobileStepper
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
            Next
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
            Back
          </Button>
        }
      /> */}
    </Box>
  );
}

export default Carousel;

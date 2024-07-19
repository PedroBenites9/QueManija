import { useTheme } from "@emotion/react";
import { Box } from "@mui/material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export function CarouselHandle({ images, altura, ancho, objFit }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === "rtl" ? "x-reverse" : "x"}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
    >
      {images.map((step, index) => (
        <div key={index}>
          {Math.abs(activeStep - index) <= 2 ? (
            <Box
              component="img"
              sx={{
                height: `${altura}`,
                display: "block",
                aspectRatio: "auto",
                objectFit: `${objFit}`,
                overflow: "hidden",
                width: `${ancho}`,
              }}
              src={step.imgPath}
              alt={step.label}
            />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
}

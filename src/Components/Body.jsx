import React from "react";
import Carousel from "./body/Carousel";
import { Typography } from "@mui/material";
import Productos from "./body/Productos";
import "../css/App.css";

const Body = () => {
  return (
    <div>
      <Carousel />
      <div>
        <Typography
          sx={{
            textAlign: "center",
            bgcolor: "#212121",
            padding: "5px 0 5px 0",
          }}
        >
          Envios superiores a $30000, envio gratis
        </Typography>
      </div>
      <Productos />
    </div>
  );
};

export default Body;

import React, { useState } from "react";
import Carousel from "./body/Carousel";
import { Typography } from "@mui/material";
import Productos from "./body/Productos";
import "../css/App.css";
import shirt from "../Mocks/ropa.json";
import { useFilterColor } from "../hooks/useFilterColor";

const Body = () => {
  // const { remeras } = shirt;
  const [remeras] = useState(shirt);
  const { filteredColor } = useFilterColor();
  const filteredColorRemera = filteredColor(remeras);
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
      <Productos remera={filteredColorRemera} />
    </div>
  );
};

export default Body;

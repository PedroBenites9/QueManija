import React, { useState } from "react";
import Carousel from "./body/Carousel";
import { Typography } from "@mui/material";
import Productos from "./body/Productos";
import "../css/App.css";
import remeras from "../Mocks/ropa.json";
import { useFilterColor } from "../hooks/useFilterColor";
import { ButtonColor } from "./body/Card/ButtonColor";

const Body = () => {
  const [remera] = useState(remeras.remeras);
  const { filterColor } = useFilterColor();
  const filteredColorRemera = filterColor(remera);

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
      <ButtonColor color={remera} />
      <Productos remera={filteredColorRemera} />
    </div>
  );
};

export default Body;

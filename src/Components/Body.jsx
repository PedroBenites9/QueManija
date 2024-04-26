import React, { useState } from "react";
import Carousel from "./body/Carousel";
import { Typography } from "@mui/material";
import Productos from "./body/Productos";
import "../css/App.css";
import "./body.css";
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
            padding: "2px 0 2px 0",
          }}
        >
          Envios superiores a $30000, envio gratis
        </Typography>
      </div>
      <section>
        <h3>Nuestras tendencias!</h3>

        <Productos remera={filteredColorRemera} />
      </section>
    </div>
  );
};

export default Body;

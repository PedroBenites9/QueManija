import React, { useState } from "react";
import Carousel from "./body/Carousel";
import { Typography } from "@mui/material";
import Productos from "./body/Productos";
import remeras from "../Mocks/ropa.json";
import { useFilterColor } from "../hooks/useFilterColor";
import { Home } from "./body/Home";
import "./body.css";

const Body = () => {
  const [remera] = useState(remeras.remeras);
  const { filterColor } = useFilterColor();
  const filteredColorRemera = filterColor(remera);
  return (
    <>
      <Home />
      <section className="section__card">
        <h3 style={{ fontSize: "2rem", margin: "  10px " }}>
          Nuestras tendencias!
        </h3>
        <Productos remera={filteredColorRemera} />
      </section>
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
    </>
  );
};

export default Body;

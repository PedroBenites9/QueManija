import React, { useState } from "react";
import { Home } from "./body/Home";
import { CardProducto } from "./body/Productos/Card/CardProducto";

import Productos from "./body/Productos";
import remeras from "../Mocks/ropa.json";

import foto1 from "./../img/Remeras/imgMujer3.JPG";
import { Typography } from "@mui/material";
import "./body.css";

const Body = () => {
  const [remera] = useState(remeras.remeras);
  return (
    <>
      <Home />
      <section className="section__card">
        <h3 style={{ fontSize: "2rem", margin: " 30px 0" }}>MODA URBANA</h3>
        <CardProducto producto={remera} />
      </section>
      <Typography
        sx={{
          textAlign: "center",
          bgcolor: "#212121",
          padding: "2px 0 2px 0",
        }}
      >
        Compras superiores a $30000, envio gratis
      </Typography>
      <section className="section__cajaText">
        <img id="fotoMujer" src={foto1} alt="fotoMujer" />
        <div className="section__text">
          <h3>Somos moda urbana</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quos,
            iure, facilis tenetur nam ducimus doloribus, molestias neque facere
            corrupti eum aut animi reprehenderit quod ad deleniti sed
            accusantium? Consequuntur.
          </p>
        </div>
      </section>

      {/* <Carousel /> */}
    </>
  );
};

export default Body;

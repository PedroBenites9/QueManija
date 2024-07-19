import React, { useState, useRef } from "react";
import { Home } from "./body/Home";
import { CardProducto } from "./body/Productos/Card/CardProducto";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Productos from "./body/Productos";
import remeras from "../Mocks/ropa.json";

import foto1 from "./../img/Remeras/imgMujer3.JPG";
import { Typography } from "@mui/material";
import useScreenSize from "../hooks/useScreenSize";

import "./../css/textDecoration.css";
import "./body.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Body = () => {
  const [remera] = useState(remeras.remeras);
  const { width } = useScreenSize();

  const remerasWord = useRef();
  const oversizeWord = useRef();
  const wordAnimate = useRef();
  const wordTwoAnimate = useRef();

  useGSAP(() => {
    gsap.to(remerasWord.current, {
      scrollTrigger: {
        trigger: ".name",
        toggleActions: "restart pause reverse pause",
        // markers: true,
        scrub: true,
      },
      x: 50,
      duration: 2,
    });
    gsap.to(oversizeWord.current, {
      scrollTrigger: {
        trigger: ".name2",
        toggleActions: " restart none none none",
        // markers: true,
        scrub: true,
      },
      x: -50,
      duration: 2,
    });
    gsap.to(wordAnimate.current, {
      scrollTrigger: {
        trigger: ".gorra",
        toggleActions: "restart pause reverse pause",
        // markers: true,
        scrub: true,
      },
      x: 100,
      duration: 2,
    });
    gsap.to(wordTwoAnimate.current, {
      scrollTrigger: {
        trigger: ".gorra2",
        toggleActions: " restart none none none",
        // markers: true,
        scrub: true,
      },
      x: -100,
      duration: 2,
    });
  });

  return (
    <main className="main__contenedor">
      <Home />
      <div className="contenedor__section">
        <section className="section__card">
          <div class="wrapper invert">
            <span ref={remerasWord} className="name" data-text="Remeras"></span>
            <span
              ref={oversizeWord}
              className="name2"
              data-text="Oversize"
            ></span>
          </div>
          <div className="wrapper subtitle">
            <span data-text="Coleccion Basic"></span>
          </div>
          <CardProducto producto={remera} />
          <Typography
            sx={{
              textAlign: "center",
              bgcolor: "#212121",
              padding: "2px 0 2px 0",
              width: "100%",
            }}
          >
            Compras superiores a $30000, envio gratis
          </Typography>
        </section>

        <section className="section__cajaText">
          {width <= 750 ? null : (
            <img id="fotoMujer" src={foto1} alt="fotoMujer" />
          )}
          <div className="section__text">
            <h3>Somos moda urbana</h3>
            <p>
              Explora nuestras colecciones y encuentra las prendas que se
              adaptan a tu estilo de vida urbano. Además, no te pierdas nuestras
              novedades y ofertas exclusivas. ¡Síguenos en Instagram para estar
              al tanto de todas las tendencias y ser parte de nuestra comunidad!
            </p>
          </div>
        </section>
        <div className="gorras">
          <Typography
            sx={{
              textAlign: "center",
              bgcolor: "#212121",
              padding: "2px 0 2px 0",
            }}
          >
            Que Manija!
          </Typography>
          <div class="wrapper invert">
            <span ref={wordAnimate} className="gorra" data-text="Gorra"></span>
            <span
              ref={wordTwoAnimate}
              className="gorra2"
              data-text="Urbana"
            ></span>
          </div>
          <div className="wrapper subtitle">
            <span data-text="Coleccion Snapback"></span>
          </div>
          <CardProducto producto={remera} />
        </div>
      </div>
    </main>
  );
};

export default Body;

import React from "react";
import "./header/header.css";
import MenuLeft from "./header/MenuLeft";
// Icon Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// logo
import logo from "../img/logo.png";
import { Cart } from "./header/Cart";
import "./header/header.css";
import { Typography } from "@mui/material";

const Header = () => {
  //* TODO: Corregir desplazamiento de header al scrollear (aparecer y desaparecer)
  return (
    <header className="header__scroll header">
      {window.screen.width <= 750 ? <MenuLeft /> : null}

      <div className="header__nav">
        <img src={logo} alt="" className="header__logo" />
        {window.screen.width <= 750 ? (
          <Typography>Que Manija</Typography>
        ) : null}
      </div>
      <div className="header__cart">
        <LocalShippingIcon />
        <Cart />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import "./header/header.css";
import MenuLeft from "./header/MenuLeft";
// Icon Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// logo
import logo from "../img/logo.png";
import { Cart } from "./header/Cart";
import "./header/header.css";

const Header = ({ children }) => {
  //* TODO: Corregir desplazamiento de header al scrollear (aparecer y desaparecer)
  return (
    <header className="header__scroll header">
      {window.screen.width <= 750 ? <MenuLeft /> : null}
      <div className="header__nav">
        <img src={logo} alt="" className="header__logo" />{" "}
      </div>
      {children}
      <div className="header__cart">
        <LocalShippingIcon />
        <Cart />
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import MenuLeft from "./header/MenuLeft";
// Icon Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// logo
import logo from "../img/logo.png";
import { Cart } from "./header/Cart";
import "./header/header.css";
import useScreenSize from "../hooks/useScreenSize";

const LinkNav = () => {
  return (
    <>
      <div className="header__nav">
        <img src={logo} alt="" className="header__logo" />
      </div>
    </>
  );
};

const Header = ({ children }) => {
  //* TODO: Corregir desplazamiento de header al scrollear (aparecer y desaparecer)
  const { width } = useScreenSize();
  return (
    <header className="header__scroll header">
      {width <= 750 ? <MenuLeft /> : <LinkNav />}
      {children}
      <div className="header__cart">
        <LocalShippingIcon />
        <Cart />
      </div>
    </header>
  );
};

export default Header;

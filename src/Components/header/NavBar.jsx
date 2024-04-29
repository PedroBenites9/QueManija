import React from "react";
import MenuLeft from "./MenuLeft";
// Icon Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// logo
import logo from "../../img/logo.png";
import { Cart } from "./Cart";
import "./header.css";
import { Typography } from "@mui/material";

const NavBar = () => {
  return (
    <header className="header">
      <MenuLeft />
      <div className="header__nav">
        <img src={logo} alt="" className="header__logo" />
        <Typography>Que Manija</Typography>
      </div>
      <div className="header__cart">
        <LocalShippingIcon />
        <Cart />
      </div>
    </header>
  );
};

export default NavBar;

import React from "react";
import MenuLeft from "./MenuLeft";
// Icon Material UI
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

// logo
import logo from "../../img/logo.png";
import { Cart } from "./Cart";
import "./header.css";

const NavBar = () => {
  return (
    <header className="header">
      <MenuLeft />
      <img src={logo} alt="" className="header__logo" />
      <nav className="nav">
        {/* busqueda */}
        <div className="input__lupa">
          <input
            type="search"
            name="busqueda"
            id=""
            className="header__busqueda"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="input-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        {/* seguimiento de compra */}
        <LocalShippingIcon />
        {/* carrito */}

        <Cart />
      </nav>
    </header>
  );
};

export default NavBar;

import React from "react";

import "./../css/App.css";
// import logo
import logo from "./../img/logo.png";
// import icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="logo footer" />
      <div className="footer__linksRedes">
        <FacebookIcon className="redesSociales" />
        <InstagramIcon className="redesSociales" />
        <WhatsAppIcon className="redesSociales" />
        {/*
         *! hacer clickeable el foooter, agregar listas y sector de tarjetas
         */}
      </div>
    </footer>
  );
};

export default Footer;

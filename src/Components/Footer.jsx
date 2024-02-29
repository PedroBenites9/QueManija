import React from "react";

import "./../css/App.css";
// import logo
import logo from "./../img/logo.png";
// import icons
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = () => {
  const handlePage = (text) => {
    if (text === "instagram") {
      window.location.href = "https://www.instagram.com/quemanija.urbana/";
    } else if (text === "whatsapp") {
      window.location.href =
        "https://wa.me/5491151491715/?text=Hola%20quisiera%20comprarte%20una%20remera";
    } else if (text === "facebook") {
      window.location.href =
        "https://www.facebook.com/profile.php?id=100091100208187";
    }
  };

  return (
<<<<<<< HEAD
    <footer className="footer__container">
      {/* logo */}
      {/* links */}
      {/* redes */}
      {/* tarjetas */}
=======
    <footer>
      <img src={logo} alt="logo footer" />
      <div className="footer__linksRedes">
        <FacebookIcon
          onClick={() => handlePage("facebook")}
          className="redesSociales"
        />
        <InstagramIcon
          onClick={() => handlePage("instagram")}
          className="redesSociales"
        />
        <WhatsAppIcon
          onClick={() => handlePage("whatsapp")}
          className="redesSociales"
        />
        {/*
         *! hacer clickeable el foooter, agregar listas y sector de tarjetas
         */}
      </div>
>>>>>>> main
    </footer>
  );
};

export default Footer;

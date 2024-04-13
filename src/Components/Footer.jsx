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
      <div className="footer__links">
        <p>Aceptamos los siguientes medio de pago: </p>
        <div className="footer__pagos">
          <img
            src="https://wallpapercosmos.com/w/full/b/4/2/1252531-3840x2160-desktop-4k-visa-card-wallpaper.jpg"
            alt="visa"
            className="footer__card"
          />
          <img
            src="https://wallpapercosmos.com/w/full/b/1/4/1254803-3840x2160-desktop-4k-mastercard-background.jpg"
            alt="amex"
            className="footer__card"
          />
          <img
            src="data:image/png;base64,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"
            alt="mercado"
            className="footer__card"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/270px-American_Express_logo_%282018%29.svg.png"
            alt="master"
            className="footer__card"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

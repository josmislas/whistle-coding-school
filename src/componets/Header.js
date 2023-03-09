import React from "react";
import "../styles/Header.css";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";

const Header = () => {
  return (
    <div className="header">
      <div className="contact">
        <FiPhoneCall />
      </div>
      <div className="title">
        <img
          className="logo-w-c"
          src={require("../images/logos/logo_wc_white_sin_fondo.png")}
          alt="logo W-C"
        />
        <h1>Whistle Coding</h1>
        <img
          className="logo-w-c"
          src={require("../images/logos/logo_wc_white_sin_fondo.png")}
          alt="logo W-C"
        />
        <div className="subtitle">
          <h2>Carrera Técnica en Programación</h2>
        </div>
      </div>
      <div className="map">
        <FiMapPin />
      </div>
    </div>
  );
};

export default Header;

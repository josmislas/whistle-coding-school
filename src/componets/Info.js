import React from "react";

const Info = () => {
  return (
    <div className="info-wrapper">
      <img
        className="image-info"
        src={require("../images/whistle-bottega-lebaron.png")}
        alt="W-C-first-generation"
      />
      <div className="info-text-wrapper">
        <p className="info-title">Escuela</p>
          <ul className="info-text">
            <li>Curso Intensivo De Tres Meses</li>
            <li>Aprende Desde Cero o Refuerza Tus</li>
            <li>Conocimientos</li>
            <li>Clases en español e ingles </li>
            <li>Escuela Certificada </li>
            <li>Al terminar tus estudios te damos trabajo </li>
            <li>Oportunidad de crecimiento</li>
            <li>Negociacion de pagos para tu carrera</li>
          </ul>
      </div>
    </div>
  );
};

export default Info;

import React from 'react';
// import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h1 className="alt-header">Descripción del Proyecto</h1>
      <p>
        Una calculadora basada en la tesis doctoral de <a href="https://www.linkedin.com/in/josenortesosa?ppe=1" target="_blank">Jose Norte</a> donde se explica cómo calcular el valor de un Cliente Digital.
      </p>
      <p>Para más información sobre la tesis: <a href="#" target="_blank">x</a></p>
      <p>Repositorio de la calculadora en <a href="https://github.com/ecovirtual/dclv-calculator" target="_blank">github</a></p>
    </div>
  );
};

export default AboutPage;

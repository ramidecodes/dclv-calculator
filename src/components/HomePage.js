import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>Calculadora para el Valor de un Cliente Digital</h1>

      <ol>
        <li>Ir a la <Link to="fuel-savings">Calculadora</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;

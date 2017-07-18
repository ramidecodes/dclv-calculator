import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div>
      <h1>DCLV Calculator</h1>

      <h2>Digital Client Lifetime Value Calculator</h2>
      <ol>
        <li>Go to the  <Link to="fuel-savings">Calculator</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;

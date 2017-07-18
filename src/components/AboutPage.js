import React from 'react';
// import {Link} from 'react-router';
import '../styles/about-page.css';

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
  return (
    <div>
      <h2 className="alt-header">About</h2>
      <p>
        This is a calculator based on <a href="https://www.linkedin.com/in/josenortesosa?ppe=1" target="_blank">Jose Norte's</a> PhD thesis on how to calculate the value of a Digital Client.
      </p>
    </div>
  );
};

export default AboutPage;

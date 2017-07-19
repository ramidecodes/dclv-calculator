import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
// import Header from './Header';
// import Footer from './Footer';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      // Add main component class to this div
      <div>
        // <Header/>
        <IndexLink to="/">Inicio</IndexLink>
        {' | '}
        <Link to="/about">Descripción General</Link>
        <br/>
        {this.props.children}

        // <Footer/>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

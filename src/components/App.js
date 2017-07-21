import React from 'react';
import PropTypes from 'prop-types';
// import { Link, IndexLink } from 'react-router';
import Header from './Header';


// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    // Add main component class to this div
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;

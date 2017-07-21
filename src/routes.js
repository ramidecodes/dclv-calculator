import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
// import HomePage from './components/HomePage';
import CalculatorPage from './containers/CalculatorPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CalculatorPage}/>
    // <Route path="fuel-savings" component={CalculatorPage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

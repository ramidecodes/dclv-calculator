import { combineReducers } from 'redux';
import calculations from './calculationsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  calculations,
  routing: routerReducer
});

export default rootReducer;

import {CALCULATE_CALCULATIONS} from '../constants/actionTypes';
import calculator from '../utils/dclvCalculator';
//import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function calculationsReducer(state = initialState.calculations, action) {
  let newState;

  switch (action.type) {

    case CALCULATE_CALCULATIONS:
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculate = calculator().necessaryDataIsProvidedToCalculate(newState);

      if (newState.necessaryDataIsProvidedToCalculate) {
        newState.dclv = calculator().calculateCalculations(newState);
      }

      return newState;

    default:
      return state;
  }
}

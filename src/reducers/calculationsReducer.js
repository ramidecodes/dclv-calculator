import {SAVE_CALCULATIONS, CALCULATE_CALCULATIONS} from '../constants/actionTypes';
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
    case SAVE_CALCULATIONS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in calculatorActions.js
      return Object.assign({}, state, {dateModified: action.dateModified});

    case CALCULATE_CALCULATIONS:
      newState = Object.assign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculate = calculator().necessaryDataIsProvidedToCalculate(newState);
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToCalculate) {
        newState.savings = calculator().calculateCalculations(newState);
      }

      return newState;

    default:
      return state;
  }
}

import * as types from '../constants/actionTypes';

// import {getFormattedDateTime} from '../utils/dateHelper';

// example of a thunk using the redux-thunk middleware
export function saveCalculations(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel dclv
    return dispatch({
      type: types.SAVE_CALCULATIONS,
      settings
    });
  };
}

export function calculateCalculations(settings, fieldName, value) {
  return {
    type: types.CALCULATE_CALCULATIONS,
    settings,
    fieldName,
    value
  };
}

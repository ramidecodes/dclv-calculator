import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './calculatorActions';

// import MockDate from 'mockdate';

// import {getFormattedDateTime} from '../utils/dateHelper';

describe('Actions', () => {

  const appState = {
    pt: 38,
    ct: 24,
    ted: 3.75,
    icc: 3.75,
    dac: 30,
    ht: 1,
    displayResults: false,
    necessaryDataIsProvidedToCalculate: false,
    dclv: 28.95
  };

  it('should create an action to save dclv', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SAVE_CALCULATIONS,
      settings: appState
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveCalculations(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveCalculations(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to calculate dclv', () => {
    const fieldName = 'pt';
    const value = 38;
    const actual = ActionCreators.calculateCalculations(appState, fieldName, value);
    const expected = {
      type: ActionTypes.CALCULATE_CALCULATIONS,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});

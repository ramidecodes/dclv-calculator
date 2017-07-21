import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './calculatorActions';

import MockDate from 'mockdate';

import {getFormattedDateTime} from '../utils/dateHelper';

describe('Actions', () => {
  let dateModified;
  beforeAll(() => {
    MockDate.set(new Date());
    dateModified = getFormattedDateTime();
  });
  afterAll(() => MockDate.reset());

  const appState = {
    newMpg: 20,
    tradeMpg: 10,
    newPpg: 1.50,
    tradePpg: 1.50,
    milesDriven: 100,
    milesDrivenTimeframe: 'week',
    displayResults: false,
    dateModified: null,
    necessaryDataIsProvidedToCalculate: false,
    savings: {
      monthly: 0,
      annual: 0,
      threeYear: 0
    }
  };

  it('should create an action to save fuel savings', () => {
    const dispatch = jest.fn();
    const expected = {
      type: ActionTypes.SAVE_CALCULATIONS,
      dateModified,
      settings: appState
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (ActionCreators.saveCalculations(appState))).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    ActionCreators.saveCalculations(appState)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should create an action to calculate fuel savings', () => {
    const fieldName = 'newMpg';
    const value = 100;
    const actual = ActionCreators.calculateCalculations(appState, fieldName, value);
    const expected = {
      type: ActionTypes.CALCULATE_CALCULATIONS,
      dateModified,
      settings: appState,
      fieldName,
      value
    };

    expect(actual).toEqual(expected); // Notice use of deep because it's a nested object
    // expect(actual).to.equal(expected); // Fails. Not deeply equal
  });
});

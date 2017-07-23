import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';
import calculator from '../utils/dclvCalculator';
import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'pt', value: 38 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'ct', value: 24 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'ted', value: 3.75 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'icc', value: 3.75 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'dac', value: 30 },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      pt: 38,
      ct: 24,
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: true,
      dclv: calculator().calculateCalculations(store.getState().calculations)
    };

    expect(actual.calculations).toEqual(expected);
  });

  it('should not display results when necessary data is not provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'pt', value: 38 },
      // { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'ct', value: 24 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'ted', value: 3.75 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'icc', value: 3.75 },
      { type: ActionTypes.CALCULATE_CALCULATIONS, settings: store.getState(), fieldName: 'dac', value: 30 },
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      pt: 38,
      ct: '',
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: false,
      dclv: "0"
    };


    expect(actual.calculations).toEqual(expected);
  });
});

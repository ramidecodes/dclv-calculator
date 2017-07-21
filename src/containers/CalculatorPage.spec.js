import React from 'react';
import {shallow} from 'enzyme';
import {CalculatorPage} from './CalculatorPage';
import CalculatorForm from '../components/CalculatorForm';

describe('<CalculatorPage />', () => {
  it('should contain <CalculatorForm />', () => {
    const actions = {
      saveCalculations: () => { },
      calculateCalculations: () => { }
    };
    const calculations = {};
    const wrapper = shallow(<CalculatorPage actions={actions} calculations={calculations}/>);

    expect(wrapper.find(CalculatorForm).length).toEqual(1);
  });
});

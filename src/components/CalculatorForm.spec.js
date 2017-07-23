import React from 'react';
import { shallow } from 'enzyme';
import CalculatorForm from './CalculatorForm';
import CalculatorTextInput from './CalculatorTextInput';
import CalculatorResults from './CalculatorResults';

describe('<CalculatorForm />', () => {
  it('should contain <CalculatorTextInput /> components', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = () => {
    };
    const calculations = {
      pt: 38,
      ct: 24,
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      ht: 1,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: false,
      dclv: 28.94
    };

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const allInputs = wrapper.find(CalculatorTextInput);

    expect(allInputs.length).toEqual(5);
    expect(allInputs.at(0).props().name).toEqual('pt');
    expect(allInputs.at(0).props().value).toEqual(calculations.pt);
    expect(allInputs.at(1).props().name).toEqual('ct');
    expect(allInputs.at(1).props().value).toEqual(calculations.ct);
    expect(allInputs.at(2).props().name).toEqual('ted');
    expect(allInputs.at(2).props().value).toEqual(calculations.ted);
    expect(allInputs.at(3).props().name).toEqual('icc');
    expect(allInputs.at(3).props().value).toEqual(calculations.icc);
    expect(allInputs.at(4).props().name).toEqual('dac');
    expect(allInputs.at(4).props().value).toEqual(calculations.dac);
  });

  it('should contain <CalculatorResults /> when necessary conditions are met', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = () => {
    };
    const calculations = {
      pt: 38,
      ct: 24,
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      ht: 1,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: false,
      dclv: 28.94
    };

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const expected = <CalculatorResults dclv={calculations.dclv} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });


  it('should handle form submit', () => {
    const saveCalculations = jest.fn();
    const calculateCalculations = () => {
    };
    const calculations = {
      pt: 38,
      ct: 24,
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      ht: 1,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: false,
      dclv: 28.94
    };

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);

    expect(saveCalculations).not.toBeCalled();
    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveCalculations).toBeCalled();
  });

  it('should submit appState', () => {
    const saveCalculations = jest.fn();
    const calculateCalculations = () => {
    };
    const calculations = {
      pt: 38,
      ct: 24,
      ted: 3.75,
      icc: 3.75,
      dac: 30,
      ht: 1,
      displayResults: false,
      necessaryDataIsProvidedToCalculate: false,
      dclv: 28.94
    };

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveCalculations).toBeCalledWith(calculations);
  });

});

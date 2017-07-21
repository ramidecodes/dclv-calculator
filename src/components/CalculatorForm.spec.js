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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const allInputs = wrapper.find(CalculatorTextInput);

    expect(allInputs.length).toEqual(5);
    expect(allInputs.at(0).props().name).toEqual('newMpg');
    expect(allInputs.at(0).props().value).toEqual(calculations.newMpg);
    expect(allInputs.at(1).props().name).toEqual('tradeMpg');
    expect(allInputs.at(1).props().value).toEqual(calculations.tradeMpg);
    expect(allInputs.at(2).props().name).toEqual('newPpg');
    expect(allInputs.at(2).props().value).toEqual(calculations.newPpg);
    expect(allInputs.at(3).props().name).toEqual('tradePpg');
    expect(allInputs.at(3).props().value).toEqual(calculations.tradePpg);
    expect(allInputs.at(4).props().name).toEqual('milesDriven');
    expect(allInputs.at(4).props().value).toEqual(calculations.milesDriven);
  });

  it('should contain options to change miles driven timeframe', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = () => {
    };
    const calculations = {
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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const expectedOption1 = '<option value="week">Semanal</option>';
    const expectedOption2 = '<option value="month">Mensual</option>';
    const expectedOption3 = '<option value="year">Anual</option>';

    expect(wrapper.find('select').childAt(0).html()).toEqual(expectedOption1);
    expect(wrapper.find('select').childAt(1).html()).toEqual(expectedOption2);
    expect(wrapper.find('select').childAt(2).html()).toEqual(expectedOption3);
  });

  it('should contain <CalculatorResults /> when necessary conditions are met', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = () => {
    };
    const calculations = {
      newMpg: 20,
      tradeMpg: 10,
      newPpg: 1.50,
      tradePpg: 1.50,
      milesDriven: 100,
      milesDrivenTimeframe: 'week',
      displayResults: false,
      dateModified: null,
      necessaryDataIsProvidedToCalculate: true,
      savings: {
        monthly: 10,
        annual: 120,
        threeYear: 360
      }
    };

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const expected = <CalculatorResults savings={calculations.savings} />;

    expect(wrapper.contains(expected)).toBeTruthy();
  });

  it('should not contain <CalculatorResults /> when necessary conditions are not met', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = () => {
    };
    const calculations = {
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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);
    const expected = <CalculatorResults savings={calculations.savings} />;

    expect(wrapper.contains(expected)).toBeFalsy();
  });

  it('should handle form submit', () => {
    const saveCalculations = jest.fn();
    const calculateCalculations = () => {
    };
    const calculations = {
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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);

    wrapper.find('input[type="submit"]').simulate('click');
    expect(saveCalculations).toBeCalledWith(calculations);
  });


  it('should calculate fuel savings on text input change', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = jest.fn();
    const calculations = {
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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);

    expect(calculateCalculations).not.toBeCalled();
    wrapper.find(CalculatorTextInput).first().simulate('change');
    expect(calculateCalculations).toBeCalled();
  });

  it('should calculate fuel savings on miles driven timeframe change', () => {
    const saveCalculations = () => {
    };
    const calculateCalculations = jest.fn();
    const calculations = {
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

    const wrapper = shallow(<CalculatorForm
      saveCalculations={saveCalculations}
      calculateCalculations={calculateCalculations}
      calculations={calculations}
    />);

    expect(calculateCalculations).not.toBeCalled();
    wrapper.find('select').simulate('change', { target: { value: 'year' } });
    expect(calculateCalculations).toBeCalledWith(calculations, 'milesDrivenTimeframe', 'year');
  });
});

import React from 'react';
import {shallow} from 'enzyme';
import CalculatorResults from './CalculatorResults';

describe('<CalculatorResults />', () => {

  it('should give values a \'loss\' class when savings don\'t exist', () => {
    const savings = {
      monthly: '-10',
      annual: '-120',
      threeYear: '-360'
    };

    const wrapper = shallow(<CalculatorResults savings={savings}/>);
    const actual = wrapper.find('.loss').length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});

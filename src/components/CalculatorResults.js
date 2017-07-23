import React from 'react';
import PropTypes from 'prop-types';
// import NumberFormatter from '../utils/numberFormatter';

// This is a stateless functional component. (Also known as pure or dumb component)
// More info: https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
// And https://medium.com/@joshblack/stateless-components-in-react-0-14-f9798f8b992d
// Props are being destructured below to extract the dclv object to shorten calls within component.
const CalculatorResults = ({dclv}) => {
  // console.log(dclv);
  // console.log("typeof", typeof(dclv.monthly));
  const savingsExist = dclv > 0;
  const savingsClass = savingsExist ? 'clientedigital' : 'error';
  const resultLabel = savingsExist ? 'Valor del Cliente Digital' : 'Error de Calculo';

  // You can even exclude the return statement below if the entire component is
  // composed within the parentheses. Return is necessary here because some
  // variables are set above.
  return (
    <table>
      <tbody>
      <tr>
        <td className="dclv-label"><strong>{resultLabel}</strong></td>
        <td>
          <table>
            <tbody>
            <tr>
              <td>DCLV</td>
            </tr>
            <tr>
              <td className={savingsClass}>{dclv}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  );
};

// Note that this odd style is utilized for propType validation for now. Must be defined *after*
// the component is defined, which is why it's separate and down here.
CalculatorResults.propTypes = {
  dclv: PropTypes.number.isRequired
};

export default CalculatorResults;

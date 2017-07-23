import React from 'react';
import PropTypes from 'prop-types';
import CalculatorResults from './CalculatorResults';
import CalculatorTextInput from './CalculatorTextInput';

class CalculatorForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.calculatorKeyPress = this.calculatorKeyPress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateCalculations(this.props.calculations, e.target.value);
  }

  calculatorKeyPress(name, value) {
    this.props.calculateCalculations(this.props.calculations, name, value);
  }

  save() {
    this.props.saveCalculations(this.props.calculations);
  }

  render() {
    const {calculations} = this.props;

    return (
      <div>
        <h1>Calculadora para el Valor de un Cliente Digital</h1>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="pt"><strong>pt</strong> (Ingresos por clientes en un tiempo "t")</label></td>
            <td><CalculatorTextInput onChange={this.calculatorKeyPress} name="pt" value={calculations.pt}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="ct"><strong>ct</strong> (Costes por servicios hacia el cliente en un tiempo "t")</label></td>
            <td><CalculatorTextInput onChange={this.calculatorKeyPress} name="ct" value={calculations.ct}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="ted"><strong>TED</strong> (Tasa de Engagement Digital)</label></td>
            <td><CalculatorTextInput onChange={this.calculatorKeyPress} name="ted" value={calculations.ted}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="icc"><strong>i</strong> (Tasa de descuento)</label></td>
            <td><CalculatorTextInput onChange={this.calculatorKeyPress} name="icc" value={calculations.icc}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="dac"><strong>DAC</strong> Costes de adquisición del cliente digial</label></td>
            <td><CalculatorTextInput onChange={this.calculatorKeyPress} name="dac" value={calculations.dac}/></td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {calculations.necessaryDataIsProvidedToCalculate && <CalculatorResults dclv={calculations.dclv}/>}
        <input type="submit" value="Calcular" onClick={this.save}/>
      </div>
    );
  }
}

CalculatorForm.propTypes = {
  saveCalculations: PropTypes.func.isRequired,
  calculateCalculations: PropTypes.func.isRequired,
  calculations: PropTypes.object.isRequired
};

export default CalculatorForm;

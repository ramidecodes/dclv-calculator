import React from 'react';
import PropTypes from 'prop-types';
import CalculatorResults from './CalculatorResults';
import CalculatorTextInput from './CalculatorTextInput';

class CalculatorForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateCalculations(this.props.calculations, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
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
            <td><label htmlFor="newMpg"><strong>pt</strong> (Ingresos por clientes en un tiempo "t")</label></td>
            <td><CalculatorTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={calculations.newMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradeMpg"><strong>ct</strong> (Costes por servicios hacia el cliente en un tiempo "t")</label></td>
            <td><CalculatorTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={calculations.tradeMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="newPpg"><strong>TED</strong> (Tasa de Engagement Digital)</label></td>
            <td><CalculatorTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={calculations.newPpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg"><strong>i</strong> (Tasa de descuento)</label></td>
            <td><CalculatorTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={calculations.tradePpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="milesDriven"><strong>T</strong> (Horizonte de tiempo para la estimación)</label></td>
            <td>
              <CalculatorTextInput
                onChange={this.fuelSavingsKeypress}
                name="milesDriven"
                value={calculations.milesDriven}/>
              <strong>Período</strong>
              <select
                name="milesDrivenTimeframe"
                onChange={this.onTimeframeChange}
                value={calculations.milesDrivenTimeframe}>
                <option value="week">Semanal</option>
                <option value="month">Mensual</option>
                <option value="year">Anual</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Última modificación</label></td>
            <td>{calculations.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {calculations.necessaryDataIsProvidedToCalculate && <CalculatorResults savings={calculations.savings}/>}
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

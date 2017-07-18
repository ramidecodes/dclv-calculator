import React from 'react';
import PropTypes from 'prop-types';
import FuelSavingsResults from './FuelSavingsResults';
import FuelSavingsTextInput from './FuelSavingsTextInput';

class FuelSavingsForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.save = this.save.bind(this);
    this.onTimeframeChange = this.onTimeframeChange.bind(this);
    this.fuelSavingsKeypress = this.fuelSavingsKeypress.bind(this);
  }

  onTimeframeChange(e) {
    this.props.calculateFuelSavings(this.props.fuelSavings, 'milesDrivenTimeframe', e.target.value);
  }

  fuelSavingsKeypress(name, value) {
    this.props.calculateFuelSavings(this.props.fuelSavings, name, value);
  }

  save() {
    this.props.saveFuelSavings(this.props.fuelSavings);
  }

  render() {
    const {fuelSavings} = this.props;

    return (
      <div>
        <h2>Calculadora para el Valor de un Cliente Digital</h2>
        <table>
          <tbody>
          <tr>
            <td><label htmlFor="newMpg"><strong>pt</strong> (Ingresos por clientes en un tiempo "t")</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newMpg" value={fuelSavings.newMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradeMpg"><strong>ct</strong> (Costes por servicios hacia el cliente en un tiempo "t")</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradeMpg" value={fuelSavings.tradeMpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="newPpg"><strong>TED</strong> (Tasa de Engagement Digital)</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="newPpg" value={fuelSavings.newPpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="tradePpg"><strong>i</strong> (Tasa de descuento)</label></td>
            <td><FuelSavingsTextInput onChange={this.fuelSavingsKeypress} name="tradePpg" value={fuelSavings.tradePpg}/>
            </td>
          </tr>
          <tr>
            <td><label htmlFor="milesDriven"><strong>T</strong> (Horizonte de tiempo para la estimación)</label></td>
            <td>
              <FuelSavingsTextInput
                onChange={this.fuelSavingsKeypress}
                name="milesDriven"
                value={fuelSavings.milesDriven}/>
              <strong>Período</strong>
              <select
                name="milesDrivenTimeframe"
                onChange={this.onTimeframeChange}
                value={fuelSavings.milesDrivenTimeframe}>
                <option value="week">Semanal</option>
                <option value="month">Mensual</option>
                <option value="year">Anual</option>
              </select>
            </td>
          </tr>
          <tr>
            <td><label>Última modificación</label></td>
            <td>{fuelSavings.dateModified}</td>
          </tr>
          </tbody>
        </table>

        <hr/>

        {fuelSavings.necessaryDataIsProvidedToCalculateSavings && <FuelSavingsResults savings={fuelSavings.savings}/>}
        <input type="submit" value="Calcular" onClick={this.save}/>
      </div>
    );
  }
}

FuelSavingsForm.propTypes = {
  saveFuelSavings: PropTypes.func.isRequired,
  calculateFuelSavings: PropTypes.func.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

export default FuelSavingsForm;

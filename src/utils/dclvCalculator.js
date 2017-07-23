import mathHelper from './mathHelper';
import math from 'mathjs';
// import NumberFormatter from './numberFormatter';

// Calculate DCLV here
// This file uses the factory function pattern instead of a class.
// Just showing an alternative to using a class.
// This declares a function with a private method.
// The public function returns an object literal.
// Could arguably be called FuelSavingCalculatorFactory.
const dclvCalculator = function () {
  // private
  // const calculateTed = function (te, cr) {
  //   let n = 1;
  //   const ted = (te + cr) / n ;
  //   return ted;
  // };

  // public
  return {

    calculateDclv: function (settings) {

      const pt = settings.pt;   // Ingresos por clientes en tiempo t
      const ct = settings.ct;   // Costes directos
      // const ted = this.calculateTed(settings.te, settings.cr);
      const ted = settings.ted; // Tasa de engagement digital
      const icc = settings.icc; // Tasa de descuento o coste de capital de empresa
      const ht = 1;             // horizonte de tiempo
      const dac = settings.dac; // Costes de adquisición del cliente digital
      const dclv = math.eval((((pt - ct ) * ted ) / (ht + icc)) - dac);

      // return dclv;
      return mathHelper.roundNumber(dclv, 2);
    },

    // Check if we have all the data to calculate
    necessaryDataIsProvidedToCalculate: function (settings) {
      return settings.pt > 0
        && settings.ct > 0
        && settings.ted > 0
        && settings.icc > 0
        && settings.dac > 0;
    },

    // Delivers final calculation to calculationsReducer
    calculateCalculations: function (settings) {
      const dclvValue = this.calculateDclv(settings);

      return dclvValue;
    }
  };
};

export default dclvCalculator;

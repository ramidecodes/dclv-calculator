import calculator from './dclvCalculator';

describe('Claculadora para el valor de un cliente digital', () => {
  describe('necessaryDataIsProvidedToCalculate', () => {
    it('returns false when necessary data isn\'t provided', () => {
      // arrange
      const settings = {
        pt: 20
      };

      // assert
      expect(calculator().necessaryDataIsProvidedToCalculate(settings)).toEqual(false);
    });

    it('returns true when necessary data is provided', () => {
      // arrange
      const settings = {
        pt: 20,
        ct: 10,
        ted: 1.50,
        icc: 1.50,
        dac: 100
      };

      // assert
      expect(calculator().necessaryDataIsProvidedToCalculate(settings)).toEqual(true);
    });
  });



  describe('calculateDclv', () => {
    it('returns -18.95 in dclv', () => {
      // arrange
      const settings = {
        pt: 38,
        ct: 24,
        ted: 3.75,
        icc: 3.75,
        dac: 30,
        ht: 1
      };

      // act
      const dclvValue = calculator().calculateDclv(settings);

      // assert
      expect(dclvValue).toEqual(-18.95);
    });
  });
});

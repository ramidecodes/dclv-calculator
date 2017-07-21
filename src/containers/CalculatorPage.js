import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/calculatorActions';
import CalculatorForm from '../components/CalculatorForm';

export const CalculatorPage = (props) => {
  return (
    <CalculatorForm
      saveCalculations={props.actions.saveCalculations}
      calculateCalculations={props.actions.calculateCalculations}
      calculations={props.calculations}
    />
  );
};

CalculatorPage.propTypes = {
  actions: PropTypes.object.isRequired,
  calculations: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    calculations: state.calculations
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalculatorPage);

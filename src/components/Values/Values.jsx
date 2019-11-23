import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Stat from '../Stat/Stat';

const Container = styled.section`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;

const Values = ({ budgetValue, expenses, balance }) => (
  <Container>
    <Stat label="Budget" value={budgetValue} isPositive />
    <Stat label="Expenses" value={expenses} />
    <Stat label="Balance" value={balance} isPositive={balance >= 0} />
  </Container>
);

Values.propTypes = {
  budgetValue: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired,
};

export default Values;

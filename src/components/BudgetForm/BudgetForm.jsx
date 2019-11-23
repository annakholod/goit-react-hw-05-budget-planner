import React from 'react';
import PropTypes from 'prop-types';
import Form from '../../shared/Form/Form';
import Label from '../../shared/Label/Label';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { notifyEmptyBalance } from '../../helpers/helpers';

const labelStyles = `
  margin-bottom: 16px;  
`;

const BudgetForm = ({ budgetInput, changeBudget, clearInput, addBudget }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    if (budgetInput && budgetInput !== '0') {
      addBudget(budgetInput);
    } else {
      notifyEmptyBalance();
    }
    clearInput();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter your total budget
        <Input type="number" value={budgetInput} onChange={changeBudget} />
      </Label>
      <Button label="Save" type="submit" />
    </Form>
  );
};

BudgetForm.propTypes = {
  budgetInput: PropTypes.string.isRequired,
  changeBudget: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  addBudget: PropTypes.func.isRequired,
};

export default BudgetForm;

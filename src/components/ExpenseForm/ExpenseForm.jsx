import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from '../../shared/Form/Form';
import Label from '../../shared/Label/Label';
import Input from '../../shared/Input/Input';
import Button from '../../shared/Button/Button';
import { notifySumMoreBalance, notifyEmptyInput } from '../../helpers/helpers';

const labelStyles = `
  margin-bottom: 16px;
`;

const ExpenseForm = ({
  name,
  amount,
  currentExpense,
  changeExpenseName,
  changeExpenseAmount,
  addExpense,
  clearInput,
  balance,
}) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const expense = {
      ...currentExpense,
      id: shortid.generate(),
    };
    if (amount && amount !== '0') {
      if (amount <= balance) {
        addExpense(expense);
        clearInput();
      } else {
        notifySumMoreBalance();
      }
    } else {
      notifyEmptyInput();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label customStyles={labelStyles}>
        Enter expense name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={changeExpenseName}
        />
      </Label>
      <Label customStyles={labelStyles}>
        Enter expense amount
        <Input
          type="number"
          name="amount"
          value={amount}
          onChange={changeExpenseAmount}
        />
      </Label>

      <Button label="Add" type="submit" />
      <ToastContainer />
    </Form>
  );
};

ExpenseForm.propTypes = {
  name: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currentExpense: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
  }).isRequired,
  changeExpenseName: PropTypes.func.isRequired,
  changeExpenseAmount: PropTypes.func.isRequired,
  addExpense: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
  balance: PropTypes.number.isRequired,
};

export default ExpenseForm;

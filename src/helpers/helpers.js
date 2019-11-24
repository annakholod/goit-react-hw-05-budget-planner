import { toast } from 'react-toastify';

const notifySumMoreBalance = () => toast('Сумма превышает баланс!');
const notifyEmptyInput = () => toast('Введите сумму расходов');
const notifyEmptyBalance = () => toast('Введите бюджет');
const notifyMinus = () => toast('Сумма не может быть отрицательной!');
const notifyEmptyExpName = () => toast('Please input expense name!');

export {
  notifySumMoreBalance,
  notifyEmptyInput,
  notifyEmptyBalance,
  notifyMinus,
  notifyEmptyExpName,
};

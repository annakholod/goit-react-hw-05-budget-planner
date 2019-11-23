import { toast } from 'react-toastify';

const notifySumMoreBalance = () => toast('Сумма превышает баланс!');
const notifyEmptyInput = () => toast('Введите сумму расходов');
const notifyEmptyBalance = () => toast('Введите бюджет');

export { notifySumMoreBalance, notifyEmptyInput, notifyEmptyBalance };

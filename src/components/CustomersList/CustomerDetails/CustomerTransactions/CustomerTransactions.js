import PropTypes from 'prop-types';
import { dollar } from '../../../../utils/formatters';

const generateTransactionsList = (transactions) => {
  return transactions.map((transaction) => {
    const { id, totalAmount } = transaction;
    return <li key={`transaction-${id}`}>{dollar(totalAmount)}</li>;
  });
};

const CustomerTransactions = ({ transactions }) => {
  if (!transactions.length) return <p>No transactions</p>;
  return <ul>{generateTransactionsList(transactions)}</ul>;
};

export default CustomerTransactions;

CustomerTransactions.propTypes = {
  transactions: PropTypes.array
};

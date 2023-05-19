import PropTypes from 'prop-types';
import { dollar, niceDate } from '../../../../utils/formatters';
import { calcPointsPerPurchase } from '../../../../utils/calcPoints';

const generateTransactionsList = (transactions) => {
  return transactions.map((transaction) => {
    const { id, totalAmount, date } = transaction;
    const points = calcPointsPerPurchase(totalAmount);
    return (
      <li key={`transaction-${id}`}>
        {dollar(totalAmount)} - <strong>{points} points</strong> - <small>{niceDate(date)}</small>
      </li>
    );
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

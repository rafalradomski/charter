import PropTypes from 'prop-types';
import CustomerTransactions from './CustomerTransactions/CustomerTransactions';
import { calcTotalPoints } from '../../../utils/calcPoints';
import { customersDetailsStyles } from './CustomersDetails.styles';

const CustomersDetails = ({ data }) => {
  const { name, transactions } = data;
  const userTransactions = transactions.map((transaction) => transaction.totalAmount);
  const totalPoints = calcTotalPoints(userTransactions);
  return (
    <div style={customersDetailsStyles}>
      <h3>
        {name} - {totalPoints} points
      </h3>
      <CustomerTransactions transactions={transactions}></CustomerTransactions>
    </div>
  );
};

export default CustomersDetails;

CustomersDetails.propTypes = {
  data: PropTypes.object
};

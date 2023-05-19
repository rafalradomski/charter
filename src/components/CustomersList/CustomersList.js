import CustomersDetails from './CustomerDetails/CustomerDetails';
import PropTypes from 'prop-types';

const generateCutomersList = (data) => {
  return data.map((customer) => {
    const { id } = customer;
    return <CustomersDetails key={`customer-${id}`} data={customer} />;
  });
};

const CustomersList = ({ customers }) => {
  return (
    <>
      <h2>Customers</h2>
      {generateCutomersList(customers)}
    </>
  );
};

export default CustomersList;

CustomersList.propTypes = {
  customers: PropTypes.array
};

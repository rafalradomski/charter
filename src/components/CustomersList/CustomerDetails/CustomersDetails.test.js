import { render, screen } from '@testing-library/react';
import { CUSTOMERS } from '../../../data/data';
import CustomersDetails from './CustomerDetails';
import { calcTotalPoints } from '../../../utils/calcPoints';
import { extractTransactions } from './CustomerDetails';

const CUSTOMER_DATA = CUSTOMERS[0];
const CUSTOMER_NAME = CUSTOMER_DATA.name;
const CUSTOMER_POINTS = calcTotalPoints(extractTransactions(CUSTOMER_DATA.transactions));

const renderComponent = () => {
  render(<CustomersDetails data={CUSTOMER_DATA} />);
};

describe('CustomersDetails should display', () => {
  test('Customer name', () => {
    renderComponent();
    const customerName = screen.getByText(CUSTOMER_NAME, { exact: false });
    expect(customerName).toBeInTheDocument();
  });
  test('Customer total points', () => {
    renderComponent();
    const customerTotalPoints = screen.getByText(CUSTOMER_POINTS, { exact: false });
    expect(customerTotalPoints).toBeInTheDocument();
  });
});

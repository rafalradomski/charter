import { render, screen } from '@testing-library/react';
import CustomerTransactions from './CustomerTransactions';
import { CUSTOMERS } from '../../../../data/data';
import { niceDate } from '../../../../utils/formatters';
import { calcPointsPerPurchase } from '../../../../utils/calcPoints';

const TRANSACTIONS = CUSTOMERS[0].transactions;
const TOTAL_AMOUNT = `$${TRANSACTIONS[0].totalAmount}`;
const DATE = niceDate(TRANSACTIONS[0].date);
const POINTS = calcPointsPerPurchase(TRANSACTIONS[0].totalAmount);

const renderComponent = () => {
  render(<CustomerTransactions transactions={TRANSACTIONS} />);
};

describe('CustomerTransactions should display', () => {
  test('Total amount', () => {
    renderComponent();
    const totalAmount = screen.getByText(TOTAL_AMOUNT, { exact: false });
    expect(totalAmount).toBeInTheDocument();
  });
  test('Date', () => {
    renderComponent();
    const date = screen.getByText(DATE, { exact: false });
    expect(date).toBeInTheDocument();
  });
  test('Points', () => {
    renderComponent();
    const points = screen.getByText(POINTS, { exact: false });
    expect(points).toBeInTheDocument();
  });
});

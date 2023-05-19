import { render, screen } from '@testing-library/react';
import { CUSTOMERS } from '../../data/data';
import CustomersList from './CustomersList';

test('Customer name', () => {
  render(<CustomersList customers={CUSTOMERS} />);
  const linkElement = screen.getByText(/Customers/i);
  expect(linkElement).toBeInTheDocument();
});

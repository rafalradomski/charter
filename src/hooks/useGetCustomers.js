import { useState, useEffect } from 'react';
import { CUSTOMERS } from '../data/data';

const getCustomers = async () => fetch('https://dummyjson.com/users').then(() => CUSTOMERS);

export const useGetCustomers = () => {
  const [loading, setLoading] = useState(true);
  const [customers, setCustomers] = useState([]);

  const getData = async () => {
    const customersData = await getCustomers();
    setCustomers(customersData);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    customers
  };
};

export default useGetCustomers;

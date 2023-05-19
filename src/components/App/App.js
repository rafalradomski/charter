import { useGetCustomers } from '../../hooks/useGetCustomers';
import CustomersList from '../CustomersList';
import { appStyles } from './App.styles';

function App() {
  const { loading, customers } = useGetCustomers();
  return (
    <div className="App">
      <div style={appStyles}>
        {loading ? 'loading' : <CustomersList customers={customers}></CustomersList>}
      </div>
    </div>
  );
}

export default App;

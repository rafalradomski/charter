import { useGetCustomers } from '../../hooks/useGetCustomers';
import CustomersList from '../CustomersList';
import { appStyles } from './App.styles';

function App() {
  const { loading, customers } = useGetCustomers();
  return (
    <div className="App">
      <div style={appStyles}>
        <h1>Charter assignment</h1>
        {loading ? 'loading' : <CustomersList customers={customers}></CustomersList>}
      </div>
    </div>
  );
}

export default App;

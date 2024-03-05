import './App.css';
import Header1 from './components/Header1';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header1 />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />

    </GlobalProvider>
  );
}

export default App;

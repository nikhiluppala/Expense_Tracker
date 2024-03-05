import './App.css';
import Header1 from './components/Header1';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';




function App() {
  return (
    <div>
      <Header1 />
      <div className='container'>
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />

    </div>
  );
}

export default App;

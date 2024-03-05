import './App.css';
import Header1 from './components/Header1';
import Balance from './components/Balance';




function App() {
  return (
    <div>
      <Header1 />
      <div className='container'>
        <Balance />
      </div>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Coin Exchange!
        </h1>
        </header>
      <AccountBalance amount={10000}/>

        <table className='coin-table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
          <Coin name="brenoCoin" ticker="BC" price={9999.99} />
          <Coin name="ethereum" ticker="ETH" price={299.99} />
          <Coin name="tether" ticker='USDT' price={1.0} />
          <Coin name='theta' ticker='THETA' price={999.99} />
        </tbody>
    </table>  
    </div>
  );
}

export default App;

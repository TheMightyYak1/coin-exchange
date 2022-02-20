import AccountBalance from './components/AccountBalance/AccountBalance';
import React, {useEffect, useState} from 'react';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: darkblue;
  color: #cccccc;
`;

const COIN_COUNT = 10;
const formatPrice = price => parseFloat(Number(price).toFixed(4))

function App(props) {
  /*
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [],
  }
*/
  // hooks
  const [balance, setBalance] = useState(10000); //initialise the state
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  /* another method with complex object
    const [state, setState] = useState({
    balance: 10000,
    showBalance: true,
    coinData: [],
  })
  be careful using this, need to use oldState, so you don't overwrite it.
    */

  const componentDidMount = async() => {
    //use async await instead of going into call back hell
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map( coin => coin.id );
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
    const coin = response.data;
    return{
      key: coin.id,
      name: coin.name,
      ticker: coin.symbol,
      balance: 0,
      price: formatPrice(coin.quotes.USD.price),
        }
      }
    )
  //retrieve the prices
  setCoinData(coinPriceData);
  }

  // only load data if we need it
  useEffect(function() { 
    if (coinData.length === 0){
      // component did mount
      componentDidMount();

    } else {
      // component did update
    }
  });

  const handleRefresh = async(keyToRefresh) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${keyToRefresh}`;
    const response = await axios.get(tickerUrl);
    debugger;
    const newCoinPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = coinData.map( function (values){
      let newValues = {...values}; //shallow clone
      if (keyToRefresh === values.key){
        newValues.price = newCoinPrice;  
      }
      return newValues;
    });
    setCoinData(newCoinData);
  }
  
  const handleBalance = (showBalanceChange) => {
    let newShowBalance;
    if (showBalanceChange === true){
      newShowBalance = false;
    } else {
      newShowBalance = true;
    }
    setShowBalance(newShowBalance);
  }


  return (
    <Div>
      <AppHeader />
      <AccountBalance
        amount={balance}
        showBalance={showBalance}
        handleBalance={handleBalance} />
      <CoinList
        coinData={coinData}
        showBalance={showBalance}
        handleRefresh={handleRefresh} />
    </Div>
  );
}

export default App;

 /* get API data instead
      {
        name: "brenoCoin",
        ticker: "BC",
        price: 9999.99,
        balance: 200,
      },
      {
        name: "ethereum",
        ticker: "ETH",
        price: 299.99,
        balance: 10,
      },
      {
        name: "tether",
        ticker: "USDT",
        price: 1,
        balance: 0,
      },
      {
        name: "theta",
        ticker: "THETA",
        price: 13423.99,
        balance: 2000,
      }
      */
import AccountBalance from './components/AccountBalance/AccountBalance';
import React from 'react';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: darkblue;
  color: #cccccc;
`;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: true,
    coinData: [
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
    ],
  }

  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map(function( values ){
      let newValues = {...values}; //shallow clone
      if (valueChangeTicker === values.ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;  
      }
      return newValues;
    });
    this.setState({coinData: newCoinData});
  }
  
  handleBalance = (showBalanceChange) => {
    let newShowBalance;
    if (showBalanceChange === true){
      newShowBalance = false;
    } else {
      newShowBalance = true;
    }
    this.setState({showBalance: newShowBalance});
  }

  render(){
    return (
      <Div>
        <AppHeader />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleBalance={this.handleBalance} />
        <CoinList
          coinData={this.state.coinData}
          showBalance={this.state.showBalance}
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  } 
}

export default App;

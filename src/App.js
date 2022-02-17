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
  constructor(props){
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: "brenoCoin",
          ticker: "BC",
          price: 9999.99,
        },
        {
          name: "ethereum",
          ticker: "ETH",
          price: 299.99,
        },
        {
          name: "tether",
          ticker: "USDT",
          price: 1,
        },
        {
          name: "theta",
          ticker: "THETA",
          price: 13423.99,
        }
      ]
    }
  }

  render(){
    return (
      <Div>
        <AppHeader />
        <AccountBalance amount={this.state.balance}/>
        <CoinList coinData={this.state.coinData} />
      </Div>
    );
  } 
}

export default App;

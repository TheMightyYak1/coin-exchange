import React from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const Table = styled.table`
    margin: 50px auto 50px auto;
    display: inline-block;
    font-size: 1.4rem;
`;

export default function CoinList(props) {

  return (
    <div>
      <Table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Ticker</th>
                <th>Price</th>
                <th>Balance</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {
            props.coinData.map( ({key, name, ticker, price, balance}) =>
              <Coin key={key}
                    id={key}
                    handleRefresh={props.handleRefresh}
                    name={name}
                    ticker={ticker}
                    price={price}
                    balance={balance}
                    showBalance={props.showBalance}/>
              )
          }
        </tbody>
      </Table>
    </div>
  )
}


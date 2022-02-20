import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
.coin-row td{
    border: 1px solid #cccccc;
    width: 25vh;
}
*/

const Td = styled.td`
    border: 1px solid #cccccc;
    width: 25vh;
`;

export default function Coin(props) {
    /*
    componentDidMount(){
        const callback = () => {
            // set the state to a new random value
            const randomPercentage = 0.995 + Math.random() * 0.01;
            
            this.setState(function(oldState){
                return {
                    price: oldState.price * randomPercentage
                }
            })
        }
        setInterval(callback, 1000);
    }
    */
    const handleClick = (e) => {
        //prevent default action of submitting form
        e.preventDefault();
        props.handleRefresh(props.id);

    }
    const balanceText = props.showBalance ? props.balance: 'XXXXX';
    return (
        <tr>
            <Td>{props.name}</Td>
            <Td>{props.ticker}</Td>
            <Td>$ {props.price}</Td>
            <Td>$ {balanceText}</Td>
            <Td>
                <form action="$" method="POST">
                    <button onClick={handleClick}>Refresh</button>
                </form>

            </Td>
        </tr>
    )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
}
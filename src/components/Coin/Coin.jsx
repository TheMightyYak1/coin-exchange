import React, { Component } from 'react';
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

export default class Coin extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        }
    
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
    handleClick(e){
        //prevent default action of submitting form
        e.preventDefault();
        this.props.handleRefresh(this.props.ticker);

    }
    /*    
        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState(function(oldState){
            return {
                price: oldState.price * randomPercentage
            }
        })
    }
*/
  render() {
    return (
        <tr>
            <Td>{this.props.name}</Td>
            <Td>{this.props.ticker}</Td>
            <Td>$ {this.props.price}</Td>
            <Td>
                <form action="$" method="POST">
                    <button onClick={this.handleClick}>Refresh</button>
                </form>

            </Td>
        </tr>
    );
    }
}


Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
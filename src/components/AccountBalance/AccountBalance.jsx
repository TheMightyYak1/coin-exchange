import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  font-size: 2rem;
  text-align: left;
  padding: 1.5rem 0 1.5rem 5rem;
`;

export default function AccountBalance(props) {

  const handleClick = (e) => {
    //prevent default action of submitting form
    e.preventDefault();
    props.handleBalance(props.showBalance);
  }

  const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';
  const balanceText = props.showBalance ? props.amount : 'XXXXX';

  return (
    <Section>
      Balance: $ {balanceText}
      <button onClick={handleClick}>{buttonText}</button>
    </Section>
  )
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}
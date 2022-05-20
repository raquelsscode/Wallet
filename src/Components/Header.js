import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      moeda: 'BRL',
    };
  }

  render() {
    const { email, expenses } = this.props;
    const { moeda } = this.state;
    const despesas = expenses.reduce((acc, despesa) => {
      const { value: valor, currency, exchangeRates } = despesa;
      const exchange = Object.values(exchangeRates);
      const exchangeFilter = exchange.filter((coin) => coin.code === currency);
      acc += valor * exchangeFilter[0].ask;
      return acc;
    }, 0);
    return (
      <header>
        <h2 data-testid="email-field">{ email }</h2>
        <h2 data-testid="total-field">{despesas.toFixed(2)}</h2>
        <h2 data-testid="header-currency-field">{ moeda }</h2>
      </header>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

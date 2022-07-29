import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../WalletCSS/Header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      moeda: 'BRL',
    };
  }

  render() {
    const { name, expenses } = this.props;
    const { moeda } = this.state;
    const despesas = expenses.reduce((acc, despesa) => {
      const { value: valor, currency, exchangeRates } = despesa;
      const exchange = Object.values(exchangeRates);
      const exchangeFilter = exchange.filter((coin) => coin.code === currency);
      acc += valor * exchangeFilter[0].ask;
      return acc;
    }, 0);
    return (
      <header className='header-container'>
        <h2 data-testid="email-field">Bem Vindo(a) { name }</h2>
        <span className='field'>
        <h2>Valor Total</h2>
        <h2 className='total-field' data-testid="total-field">{despesas.toFixed(2)}</h2>
        <h2 data-testid="header-currency-field">{ moeda }</h2>
        </span>
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
  name: state.user.name,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps, null)(Header);

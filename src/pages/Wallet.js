import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { xchange } from '../actions/index';

class Wallet extends React.Component {
  async componentDidMount() {
    const { dispatch } = this.props;
    dispatch(xchange());
  }

  render() {
    console.log(this.props);
    const { user: { email } } = this.props;
    return (
      <div>
        <h1>TrybeWallet</h1>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">0</p>
        <p data-testid="header-currency-field">BRL</p>
      </div>);
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  currencies: state.currencies,
});

export default connect(mapStateToProps)(Wallet);

Wallet.propTypes = {
  email: propTypes.string,
}.isRequired;

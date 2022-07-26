import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { sendExpenses } from '../actions/index';
import '../WalletCSS/Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: {},
    };
  }

  expensesAPI = () => {
    const { Infos } = this.props;
    const { id } = this.state;
    this.setState({}, async () => {
      const EXCHANGE = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(EXCHANGE);
      const data = await response.json();
      this.setState({
        exchangeRates: data }, () => {
        Infos(this.state);
        this.setState({ id: id + 1, value: '' });
      });
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { currencies } = this.props;
    const { value, description } = this.state;

    return (
      <section className='form-container'>
      <form>
        <label htmlFor="value">
          <h3>Valor</h3>
          <input
            className='value'
            type="number"
            data-testid="value-input"
            name="value"
            value={ value }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="description">
          <h3>Descrição</h3>
          <input
            className='description'
            type="text"
            data-testid="description-input"
            name="description"
            value={ description }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="moeda">
          <h3>Moeda</h3>
          <select
            name="currency"
            onChange={ this.handleChange }
            id="moeda"
          >
            {currencies.map((element) => (
              <option
                key={ element }
                value={ element }
              >
                { element }
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="method">
          <h3>Forma de Pagamento:</h3>
          <select
            onChange={ this.handleChange }
            name="method"
            data-testid="method-input"
            id="method"
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="tag">
          <h3>Categoria</h3>
          <select
            onChange={ this.handleChange }
            name="tag"
            data-testid="tag-input"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
        <button
          type="button"
          onClick={ this.expensesAPI }
        >
          Adicionar despesa
        </button>
      </form>
      </section>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  Infos: (state) => dispatch(sendExpenses(state)),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

Form.propTypes = {
  dispatchInfos: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Form);

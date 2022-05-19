import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { currencies } = this.props;

    return (
      <form>
        <label htmlFor="value">
          Valor
          <input
            type="number"
            data-testid="value-input"
            name="value"
          />
        </label>
        <label htmlFor="description">
          Descrição
          <input
            type="text"
            data-testid="description-input"
            name="description"
          />
        </label>
        <label htmlFor="currency">
          Moeda
          <select
            name="currency"
            id="currency"
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
          Método de Pagamento
          <select
            data-testid="method-input"
            name="method"
            id="method"
          >
            <option>Dinheiro</option>
            <option>Cartão de débito</option>
            <option>Cartão de crédito</option>
          </select>
        </label>
        <label htmlFor="tag">
          Categoria
          <select
            data-testid="tag-input"
            name="tag"
            id="tag"
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>
          </select>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

export default connect(mapStateToProps)(Form);

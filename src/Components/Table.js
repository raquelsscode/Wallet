import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../WalletCSS/Tablestyle.css';
import '../fontawesome/css/all.css';
import { updateWalletExpensesStore } from '../actions';

class Table extends Component {

  removeExpenceFromStore = (expenseId) => {
    console.log(expenseId);
    const { expenses } = this.props;
    const updateExpensesObj = expenses.filter((expense) => expense.id !== expenseId);
    const { updateExpenses } = this.props;
    console.log(updateExpensesObj);
    updateExpenses(updateExpensesObj);
  };

  render() {
    const { expenses } = this.props;
    return (
      <section className='table-container'>
      <table>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Excluir</th>
        </tr>
        {expenses.map((despesa, index) => {
          const objCurrencies = Object.entries(despesa.exchangeRates)
            .find((element) => element[1].code === despesa.currency)[1];
          return (
            <tr key={ index }>
              <td>{ despesa.description }</td>
              <td>{ despesa.tag }</td>
              <td>{ despesa.method }</td>
              <td>{ Number(despesa.value).toFixed(2) }</td>
              <td>{ objCurrencies.name }</td>
              <td>{ Number(objCurrencies.ask).toFixed(2) }</td>
              <td>{ Number(despesa.value * objCurrencies.ask).toFixed(2) }</td>
              <td>Real</td>
              <td>
              <button 
              type="button"
              onClick={ () => this.removeExpenceFromStore(despesa.id)}
              className='delete-field'><i 
              className="fa-solid fa-trash"/>
              </button>
              </td>
            </tr>
          );
        })}
      </table>
      </section>
    );
  }
}

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateExpenses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  updateExpenses: (expenses) => dispatch(updateWalletExpensesStore(expenses)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);

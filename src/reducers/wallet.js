// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIE, GET_EXPENSES } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIE:
    return {
      ...state,
      currencies: action.arrayObj,
    };
  case GET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],

    };
  default:
    return state;
  }
}

export default wallet;

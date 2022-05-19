// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { GET_CURRENCIE } from '../actions';

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
  default:
    return state;
  }
}

export default wallet;
